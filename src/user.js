function User(apiKey, urlRoot, debug, printErrors, config) {
  var that = this;

  that.getUser = function() {
    return JSON.parse('{"success":"ok"}');
  };

  that.addNewUser = function() {
    return JSON.parse('{"success":"ok"}');
  };

  that.addUserVariable = function() {
    return JSON.parse('{"success":"ok"}');
  };

  that.getUserVariable = function() {
    return JSON.parse('{"success":"ok"}');
  };

  return that;
}

module.exports = User;