var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productModel = new Schema({
  "productID" : {type: Number},
  "productName" : {type: String},
  "supplierID" : {type: Number},
  "categoryID" : {type: Number},
  "quantityPerUnit" : {type: String},
  "unitPrice" : {type: Number},
  "unitsInStock" : {type: Number, default: 0},
  "unitsOnOrder" : {type: Number, default: 0},
  "reorderLevel" : {type: Number},
  "discontinued" : {type: Boolean, default: false },
  "featured" : {type: Boolean, default: false}
});

module.exports=mongoose.model('product', productModel);