'use strict';

/* global -Promise */
//var Promise = require('es6-promise').Promise;
//var mockery = require('mockery');
//var nodemock = require('nodemock');

module.exports = {

  'findWifiDevices() exists': function(test) {
    var findWifiDevices = require('../../index');
    findWifiDevices().then(function(result) {
      test.equal(result, false);
      test.done();
    });
  }

};
