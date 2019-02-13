// var User = require('./user');
const arrowbot = require('./../src/index')("5c5404b90591b313008b4567", {urlRoot: "https://firedev.arrowai.com/"});
arrowbot.user.addNewUser('test hanif 132','web').then((user)=>{ console.log(user)});
arrowbot.user.addUserVariable('adding test user variable 23','testing group id 33').then((user)=>{ console.log(user)});
arrowbot.user.getUserVariable('testing group id').then((user)=>{ console.log(user)});
arrowbot.user.getUser('richa@arrowai.com').then((user)=>{ console.log(user)});
arrowbot.chat.addOutgoingChat('here we send response in format','test user_id').then((chat)=>{ console.log(chat)});



