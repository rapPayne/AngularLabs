var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderModel = new Schema({
  "orderID": { type: Number },
  "customerID": { type: Number },
  "status": { type: Number },
  "orderDate": { type: Date },
  "shipVia": { type: Number },
  "shipping": { type: Number },
  "tax": { type: Number },
  "shipName": { type: String },
  "shipAddress": { type: String },
  "shipCity": { type: String },
  "shipRegion": { type: String },
  "shipPostalCode": { type: String },
  "shipCountry": { type: String },
  "lines": {
    "productID": { type: Number },
    "quantity": { type: Number },
    "price": { type: Number }
  }
});

module.exports = mongoose.model('order', orderModel);