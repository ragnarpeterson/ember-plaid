/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-plaid',

  contentFor: function(type, config) {
    if (type === 'body' && !(config['ember-plaid'].scriptTag === false)) {
      return '<script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>';
    }
  }
};
