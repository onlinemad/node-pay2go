/* eslint-env mocha */

const assert = require('chai').assert
const Pay2go = require('../index')

suite('pay2go', () => {
  suite('constructor', () => {
    test('should return pay2go instance', () => {
      var pay2go = new Pay2go({
        merchantID: 'merchantID',
        hashKey: 'hashKey',
        hashIV: 'hashIV'
      })
      assert.instanceOf(pay2go, Pay2go, 'pay2go is an instance of Pay2go')
    })
    test('should throw Error', () => {
      assert.throw(() => {
        new Pay2go() // eslint-disable-line no-new
      },
      Error)
    })
  })
  suite('#checkValue()', () => {
    test('should generate checkValue', () => {
      var pay2go = new Pay2go({
        merchantID: '123456',
        hashKey: '1A3S21DAS3D1AS65D1',
        hashIV: '1AS56D1AS24D'
      })
      var _order = {
        MerchantOrderNo: '20140901001',
        TimeStamp: '1403243286',
        Version: '1.1',
        Amt: 200
      }
      assert.equal(pay2go.checkValue(_order), '841F57D750FB4B04B62DDC3ECDC26F1F4028410927DD28BD5B2E34791CC434D2')
      // assert.instanceOf(pay2go, pay2go, 'pay2go is an instance of pay2go')
    })
  })
})
