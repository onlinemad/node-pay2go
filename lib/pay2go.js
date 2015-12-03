'use strict';

var _opts = {
  merchantID: '',
  hashKey: '',
  hashIV: '',
  apiUrl: 'https://api.pay2go.com/MPG/mpg_gateway',
}

var pay2go = function(opts) {
  if (typeof opts !== 'object') {
    throw new Error('Missing parameter.');
  }

  if (!opts.hasOwnProperty('merchantID') || !opts.merchantID) {
    throw new Error('Missing parameter. merchantID is required.');
  }

  if (!opts.hasOwnProperty('hashKey') || !opts.hashKey) {
    throw new Error('Missing parameter. merchantID is required.');
  }

  if (!opts.hasOwnProperty('hashIV') || !opts.hashIV) {
    throw new Error('Missing parameter. merchantID is required.');
  }

}

module.exports = pay2go;