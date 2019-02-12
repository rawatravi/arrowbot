var _ = require('lodash');
var makeRequest = require('./make-request')
var DashBotBase = require('./dashbot-base');

var VERSION = require('../package.json').version;

function User(apiKey, urlRoot, debug, printErrors, config) {
  var that = this;

  that.log = function(data) {
    return JSON.parse('{"success":"ok"}');
  };

  return that;
}

module.exports = User;