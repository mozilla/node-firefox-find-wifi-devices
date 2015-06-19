'use strict';

// See https://github.com/jshint/jshint/issues/1747 for context
/* global -Promise */
var Promise = require('es6-promise').Promise;

module.exports = findWifiDevices;

function findWifiDevices() {
  return new Promise(function(resolve, reject) {
    return resolve(false);
  });
}
