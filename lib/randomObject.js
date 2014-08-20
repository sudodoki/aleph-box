var Reflect = require('harmony-reflect');

var Chance = require('chance');

var defaultDictionary = require('./default_dictionary');
Aleph.prototype.toString = function () {
    return "Aleph"
}
Aleph.inspect = "This is Aleph don't try to inspect it"
Aleph.prototype.inspect = function () {
    return "This is Aleph don't try to inspect it"
}
function Dummy() {

}
Dummy.inspect = 'This is Dummy'
Dummy.prototype.inspect = function () {
    return 'This is Dummy'
}
function Aleph(seed, Factory) {
    var aleph = this;
    this.factoryConstructor = Factory || Chance;
    this.factory = new this.factoryConstructor(seed);
    // Dummy is needed because {} would initiate endless recursion with 'inspect' property
    this.instance = new Proxy(new Dummy(), {
        get: function(target, property) {
            var method;
            if (property in target) {
                return target[property]
            }

            if (property in defaultDictionary) {
                method = defaultDictionary[property];
                target[property] = aleph.factory[method]();
            } else {
                if (property === 'length') {
                    var length = aleph.factory.integer({min: 1, max: 20}) + 1
                    target.length = length;
                    return length;
                }
                if (typeof Array.prototype[property] === 'function') {
                    var length;
                    if (!target.length) {
                        length = aleph.factory.integer({min: 1, max: 20}) + 1
                        target.length = length;
                    }

                    var all = [];
                    for (var i = 0; i < target.length; i++) {
                        // adding randomness, otherwise will have same stuff
                        target[i] = new Aleph(i * target.length);
                        all.push(target[i])
                    }
                    target[property] = function (fn) {
                        return all[property].call(all, fn)
                    }
                    return target[property]
                }
            }
            if (target[property] === undefined) {
                target[property] = new Aleph()
            }
            return target[property]
        }
    });
    return this.instance
}

module.exports = Aleph;