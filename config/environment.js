'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-plaid': {
      clientName: null,
      product: 'auth',
      key: 'test_key',
      env: 'tartan'
    }
  };
};
