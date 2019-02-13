var request = require('request');

function Chat(apiKey, urlRoot, debug, printErrors, config) {
    var that = this;
  
    that.addIncomingChat = function() {
      return JSON.parse('{"success":"ok"}');
    };
  
    that.addOutgoingChat = function(response,userid) {
     response["userId"]=userid; 
      return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        url: 'https://kubedeploy-events.portal.arrowai.com/events/'+apiKey+'/interaction_engine/addDialogFlowV1Event',
        headers: {
            'Content-Type': 'application/json'
        },
        json: response
      }, 
      function(err, httpResponse, body) {
        console.log(body)
        if (err) {
          reject(err)
        } else {
        //  console.log("inserted");
          resolve(body);
        }
      })
    })
    //  return JSON.parse('{"success":"ok"}');
    };
    return that;
  }
  
  module.exports = Chat; 