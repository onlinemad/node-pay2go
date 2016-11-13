/*eslint new-cap: [1, { "newIsCap": false }]*/

'use strict'

// const util = require('util')
const qs = require('querystring')
const crypto = require('crypto')
const _ = require('lodash')
const Aesjs = require('aes-js')

function padding (str) {
  var len = str.length
  var pad = 32 - (len % 32)
  str += String.fromCharCode(pad).repeat(pad)
  return str
}

var pay2go = function (opts) {
  if (typeof opts !== 'object') {
    throw new Error('Missing parameter.')
  }

  if (!opts.hasOwnProperty('merchantID') || !opts.merchantID) {
    throw new Error('Missing parameter. merchantID is required.')
  }

  if (!opts.hasOwnProperty('hashKey') || !opts.hashKey) {
    throw new Error('Missing parameter. merchantID is required.')
  }

  if (!opts.hasOwnProperty('hashIV') || !opts.hashIV) {
    throw new Error('Missing parameter. merchantID is required.')
  }

  this.merchantID = opts.merchantID
  this.hashKey = opts.hashKey
  this.hashIV = opts.hashIV
}

pay2go.prototype = {
  checkValue: function (order) {
    order.MerchantID = this.merchantID

    var keys = Object.keys(order)
    var sortedKeys = _.sortBy(keys, key => {
      return key
    })

    var uri = { HashKey: this.hashKey }
    _.map(sortedKeys, key => {
      uri[key] = order[key]
    })
    uri.HashIV = this.hashIV

    uri = qs.stringify(uri)

    return crypto.createHash('sha256').update(uri).digest('hex').toUpperCase()
  },

  postdata: function (payload) {
    var aes = new Aesjs.ModeOfOperation.cbc(new Buffer(this.hashKey), new Buffer(this.hashIV))
    return aes.encrypt(new Buffer(padding(qs.stringify(payload)))).toString('hex')
  }
}

module.exports = pay2go
