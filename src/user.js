function User(apiKey, urlRoot, debug, printErrors, config) {
  var that = this;

  that.log = function(data) {
    return JSON.parse('{"success":"ok"}');
  };

  return that;
}

module.exports = User;