var assert = require('chai').assert;
var pay2go = require('../lib/pay2go');

suite('pay2go', function() {
  suite('constructor', function() {
    test('should return pay2go instance', function() { 
      var _pay2go = new pay2go({
        merchantID: 'merchantID',
        hashKey: 'hashKey',
        hashIV: 'hashIV'
      });
      assert.instanceOf(_pay2go, pay2go, '_pay2go is an instance of pay2go');
    });
    test('should throw Error', function() { 
      assert.throw(function () { new pay2go(); }, Error);
    });
  });
});