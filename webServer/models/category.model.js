var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoryModel = new Schema({
  "categoryID" : {type: Number},
  "name" : {type: String},
  "description" : {type: String},
});

module.exports=mongoose.model('category', categoryModel);