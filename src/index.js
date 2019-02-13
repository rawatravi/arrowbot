var User = require('./user');
var Chat = require('./chat');

module.exports = function(apiKey, config) {
    console.log("This is a message from the demo package");
    //Set Application Key and Token  ///Token To be Added Later On
    //Add User
    //Get User
    //Set User Variable in Existing User
    //Get User Variable
    //Add Dialogflow Logging

    //Get the Configurations from here
    return {
      user: new User(apiKey, config.urlRoot || "https://firedev.arrowai.com/", config.debug || false, config.printErrors || true, config),
      chat: new Chat(apiKey, config.urlRoot || "https://firedev.arrowai.com/", config.debug || false, config.printErrors || true, config)
    };
};
console.log(User);