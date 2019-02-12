function Chat(apiKey, urlRoot, debug, printErrors, config) {
    var that = this;
  
    that.addIncomingChat = function() {
      return JSON.parse('{"success":"ok"}');
    };
  
    that.addOutgoingChat = function() {
      return JSON.parse('{"success":"ok"}');
    };
  
    return that;
  }
  
  module.exports = Chat;