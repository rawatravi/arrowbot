var request = require('request');
function User(apiKey, urlRoot, debug, printErrors, config) {
  var that = this;

  that.getUser = function(users_email) {
      //return JSON.parse('{"success":"ok"}');
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          url: urlRoot + '/users/getUsers',
          headers: {
              'Content-Type': 'application/json'
          },
          json: {
            "filters":
            [
              {"match":{
                "variable.email":users_email
              }
                }
                ],
                "allFields":true,
                apiKey
          }
        }, 
        function(err, httpResponse, body) {
          console.log(body)
          if (err) {
            reject(err)
          } else {
            console.log('user detail');
            resolve(body);
          }
        })
      })
  };
 
  that.addNewUser = function(name, channel, personalInfo={} ,deviceInfo={}) {
    let jsonData = {
      data: {
        appId: apiKey,
        name,
        source: [
          channel
        ]
      },
      variables: {
        personalInfo
      },
      deviceInfo,
      applicationId: apiKey,
      channel
    };
    
    if(personalInfo.email) {
      jsonData.data.email = email;
    }
    return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        url: urlRoot + '/users/new',
        headers: {
            'Content-Type': 'application/json'
        },
        json: jsonData
      }, 
      function(err, httpResponse, body) {
        console.log(body)
        if (err) {
          reject(err)
        } else {
          console.log("inserted");
          resolve(body);
        }
      })
    })
    
  };

  that.addUserVariable = function(user_var,groupId) {
    return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        url: urlRoot + 'users/addUserVariablesMultiple',
        headers: {
            'Content-Type': 'application/json'
        },
        json: {
          "applicationId": apiKey,
          "groupId":groupId,
          "variable": 
            user_var
          
        }
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


  };

  that.getUserVariable = function(groupId) {
    return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        url: urlRoot + 'users/getUserVariables',
        headers: {
            'Content-Type': 'application/json'
        },
        json: {
          "applicationId": apiKey,
            "groupId":groupId,
        }
      }, 
      function(err, httpResponse, body) {
       
        if (err) {
          reject(err)
        } else {
         // console.log("inserted");
          resolve(body);
        }
      })
    })
    //return JSON.parse('{"success":"ok"}');
  };

  return that;
}

module.exports = User;
