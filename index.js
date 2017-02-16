/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-plaid',

  contentFor: function(type) {
    if (type === 'body') {
      return '<script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>';
    }
  },
};
