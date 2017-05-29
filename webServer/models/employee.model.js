  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var employeeModel = new Schema({
    "employeeID" : {type: Number},
    "lastName" : {type: String},
    "firstName" : {type: String},
    "title" : {type: String},
    "titleOfCourtesy" : {type: String},
    "birthDate" : {type: Date},
    "hireDate" : {type: Date},
    "address" : {type: String},
    "city" : {type: String},
    "region" : {type: String},
    "postalCode" : {type: String},
    "country" : {type: String},
    "homePhone" : {type: String},
    "extension" : {type: String},
    "photo" : {type: String},
    "notes" : {type: String},
    "reportsTo" : {type: Number},
    "photoPath" : {type: String}
  });

  module.exports=mongoose.model('employee', employeeModel);
