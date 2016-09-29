var Reflect = require('harmony-reflect');
var Chance = require('chance');

var defaultDictionary = require('./default_dictionary');
Aleph.prototype.toString = function() {
    return 'Aleph';
};

Aleph.prototype.inspect = function() {
    return "This is Aleph instance";
};

function Dummy() {

}

Dummy.prototype.inspect = function() {
    return 'This is Dummy object';
};
Aleph.prototype.figureOutMethod = function figureOutMethod(property) {
    // return boolean values for properties that match is/are followed by
    // capitalized word
    if (property.match(/(is|are|should|can)[A-Z]/)) {
        return 'bool';
    }
    if (property.match(/id/i)) {
        return 'natural';
    }
    if (property.match(/date/i)) {
        return 'date';
    }
    // returning undefined || name of the method in standart mapping
    return defaultDictionary[property];
}
function Aleph(seed, Factory) {
    var aleph = this;
    this.factoryConstructor = Factory || Chance;
    this.factory = new this.factoryConstructor(seed || (new Date()).getTime() * Math.random());
    // Dummy is needed because {} would initiate endless recursion with 'inspect' property
    this.instance = new Proxy(new Dummy(), {
        get: function(target, property) {
            var method;
            if (property in target) {
                return target[property];
            }

            if (method = aleph.figureOutMethod(property)) {
                target[property] = aleph.factory[method]();
            } else {
                if (property === 'length') {
                    var length = aleph.factory.integer({min: 1, max: 20}) + 1;
                    target.length = length;
                    return length;
                }

                if (typeof Array.prototype[property] === 'function') {
                    var length;
                    if (!target.length) {
                        length = aleph.factory.integer({min: 1, max: 20}) + 1;
                        target.length = length;
                    }

                    var all = [];
                    for (var i = 0; i < target.length; ++i) {
                        target[i] = new Aleph();
                        all.push(target[i])
                    }
                    target[property] = function(fn) {
                        return all[property].call(all, fn)
                    };

                    return target[property];
                }
            }
            if (target[property] === undefined) {
                target[property] = new Aleph();
            }

            return target[property];
        }
    });

    return this.instance;
}

module.exports = Aleph;
