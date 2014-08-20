var chai = require('chai')

chai.Assertion.addProperty('name', function () {
  this.assert(
      this._obj.match(/^[A-Z][a-z]+$/)
    , 'expected #{this} to be capitalized name'
    , 'expected #{this} not to be capitalized name'
    , this._obj
  );
});
chai.Assertion.addProperty('surname', function () {
  this.assert(
      this._obj.match(/^(Mc)?[A-Z][a-z]+$/)
    , 'expected #{this} to be capitalized name'
    , 'expected #{this} not to be capitalized name'
    , this._obj
  );
});

chai.Assertion.addProperty('float', function () {
  this.assert(
      this._obj === +this._obj && this._obj !== (this._obj|0)
    , 'expected #{this} to be float'
    , 'expected #{this} not to be float'
    , this._obj
  );
});
// TODO: fix int, failing with expected -184092805038080 to be integer
chai.Assertion.addProperty('int', function () {
  this.assert(
      this._obj === +this._obj && this._obj === (this._obj|0)
    , 'expected #{this} to be integer'
    , 'expected #{this} not to be integer'
    , this._obj
  );
});

function toBeSentence(str) {
  return str.match(/[A-Z](.*)/m)
}
chai.Assertion.addProperty('paragraph', function () {
  var allParts = this._obj.split(/\s?\.\s?/).filter(function (s) { return s !== ''});
  this.assert(
      allParts.length === allParts.filter(toBeSentence).length
    , 'expected #{this} to be paragraph'
    , 'expected #{this} not to be paragraph'
    , this._obj
  );
});
chai.Assertion.addProperty('sentence', function () {
  this.assert(
      toBeSentence(this._obj)
    , 'expected #{this} to be sentence'
    , 'expected #{this} not to be sentence'
    , this._obj
  );
});

chai.Assertion.addProperty('gender', function () {
  this.assert(
      ['Female', 'Male'].indexOf(this._obj) > -1
    , 'expected #{this} to be gender'
    , 'expected #{this} not to be gender'
    , this._obj
  );
});

chai.Assertion.addProperty('handle', function () {
  this.assert(
      this._obj.match(/@\w+/)
    , 'expected #{this} to be handle'
    , 'expected #{this} not to be handle'
    , this._obj
  );
});

chai.Assertion.addProperty('securityNumber', function () {
  this.assert(
      this._obj.match(/\d{3}-\d{2}-\d{4}/)
    , 'expected #{this} to be security number'
    , 'expected #{this} not to be security number'
    , this._obj
  );
});

chai.Assertion.addProperty('coordinate', function () {
  this.assert(
      ('' + this._obj).match(/-?\d{1,2}\.\d{1,5}/)
    , 'expected #{this} to be coordinate'
    , 'expected #{this} not to be coordinate'
    , this._obj
  );
});