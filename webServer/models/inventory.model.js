  //console.log("reading Inventory")
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var inventoryModel = new Schema({
    "locationID" : {type: String},
    "productID" : {type: Number},
    "quantity" : {type: Number}
  }, {collection: 'inventory'});

  module.exports=mongoose.model('inventory', inventoryModel);