var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderModel = new Schema({
  "orderID" : {type: Number},
  "customerID" : {type: Number},
  "employeeID" : {type: Number},
  "orderDate" : {type: Date},
  "requiredDate" : {type: Date},
  "shippedDate" : {type: Date},
  "shipVia" : {type: Number},
  "freight" : {type: Number},
  "shipName" : {type: String},
  "shipAddress" : {type: String},
  "shipCity" : {type: String},
  "shipRegion" : {type: String},
  "shipPostalCode" : {type: String},
  "shipCountry" : {type: String}
});

module.exports=mongoose.model('order', orderModel);