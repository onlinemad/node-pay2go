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
  suite('#postdata()', () => {
    test('should generate postdata', () => {
      var pay2go = new Pay2go({
        merchantID: '12487482',
        hashKey: 'tZT07t9z5PxvMVN1YBJRtqzhaaZJo1pS',
        hashIV: '1jT8N2HSSfoFacH8'
      })
      var payload = {
        RespondType: 'JSON',
        Version: '1.0',
        Amt: '1',
        TradeNo: '14053012102338869',
        MerchantOrderNo: '1401423320',
        CloseType: '1',
        IndexType: '1',
        TimeStamp: 1479044105
      }
      assert.equal(pay2go.postdata(payload), '05e149d20b21869d0773a0078334817285bbb9cf160d200d4cac9fd2443970f7b83725e9e4c9b223b56404f407544d52b05a4e4ee11e1ea013dd6d9e1624f516030623541d7811cbc3bd7624f66369e6ae1121f3b33dc2441d13c8d995bedc2d6fca11e43d1d8d3bca78b30917a327cb5aa263780ecda08070c30dce7708b8c5a0c70cf91adadad4cb86a55a13481b58b49516d78272751e3df54fba22255c4c')
      // assert.instanceOf(pay2go, pay2go, 'pay2go is an instance of pay2go')
    })
  })
})
