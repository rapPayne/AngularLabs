  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var customerModel = new Schema({
    "customerID" : {type: Number},
    "companyName" : {type: String},
    "address" : {type: String},
    "city" : {type: String},
    "region" : {type: String},
    "postalCode" : {type: String},
    "country" : {type: String},
    "phone" : {type: String},
    "givenName" : {type: String},
    "familyName" : {type: String},
    "email" : {type: String},
    "imageUrl" : {type: String},
    "password" : {type: String}
  });

  module.exports=mongoose.model('customer', customerModel);