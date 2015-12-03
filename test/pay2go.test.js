var assert = require('chai').assert;
var pay2go = require('../index');

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
  suite('#checkValue()', function() {
    test('should generate checkValue', function() { 
      var _pay2go = new pay2go({
        merchantID: '123456',
        hashKey: '1A3S21DAS3D1AS65D1',
        hashIV: '1AS56D1AS24D'
      });
      var _order = {
        MerchantOrderNo: '20140901001',
        TimeStamp: '1403243286',
        Version: '1.1',
        Amt: 200
      }
      assert.equal(_pay2go.checkValue(_order), '841F57D750FB4B04B62DDC3ECDC26F1F4028410927DD28BD5B2E34791CC434D2');
      // assert.instanceOf(_pay2go, pay2go, '_pay2go is an instance of pay2go');
    });
  });
});