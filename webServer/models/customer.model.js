  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var customerModel = new Schema({
    "customerID" : {type: Number},
    "userId" : {type: String},
    "companyName" : {type: String},
    "contactName" : {type: String},
    "contactTitle" : {type: String},
    "address" : {type: String},
    "city" : {type: String},
    "region" : {type: String},
    "postalCode" : {type: String},
    "country" : {type: String},
    "phone" : {type: String},
    "cell" : {type: String},
    "givenName" : {type: String},
    "familyName" : {type: String},
    "email" : {type: String}
  });

  module.exports=mongoose.model('customer', customerModel);