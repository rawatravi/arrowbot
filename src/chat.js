function Chat(apiKey, urlRoot, debug, printErrors, config) {
    var that = this;
  
    that.addIncomingChat = function() {
      return JSON.parse('{"success":"ok"}');
    };
  
    that.addOutgoingChat = function() {
    //   return new Promise((resolve, reject) => {
    //   request({
    //     method: 'POST',
    //     url: 'https://kubedeploy-events.portal.arrowai.com/events/5c5404b90591b313008b4567/interaction_engine/addDialogFlowV1Event',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     json: response
    //   }, 
    //   function(err, httpResponse, body) {
    //     console.log(body)
    //     if (err) {
    //       reject(err)
    //     } else {
    //     //  console.log("inserted");
    //       resolve(body);
    //     }
    //   })
    // })
    //  return JSON.parse('{"success":"ok"}');
    //response["userId"]=userid;
    // Request({
    //     method: 'POST',

    //     url: 'https://kubedeploy-events.portal.arrowai.com/events/5c5404b90591b313008b4567/interaction_engine/addDialogFlowV1Event',

    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     json:response
    // }, function(err, httpResponse, body) {

    //     if (err) {
    //         reject(err)
    //     } else {
    //         console.log("inserted");
    //     }
    // })
    };
  
    return that;
  }
  
  module.exports = Chat; 