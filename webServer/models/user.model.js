  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userModel = new Schema({
    "userID" : {type: Number},
    "username" : {type: String},
    //"password" : {type: String},
    "passwordHash" : {type: String},
    "salt" : {type: String},
    "lastName" : {type: String},
    "firstName" : {type: String},
    "email" : {type: String}
  });

  module.exports=mongoose.model('user', userModel);