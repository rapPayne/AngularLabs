var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productModel = new Schema({
  "productID" : {type: Number},
  "name" : {type: String},
  "description" : {type: String},
  "price" : {type: Number},
  "featured" : {type: Boolean, default: false}
}, {collection: 'products'});

module.exports=mongoose.model('product', productModel);