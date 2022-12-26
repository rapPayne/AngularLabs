  //console.log("reading Location")
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var locationModel = new Schema({
    "locationID" : {type: String},
    "description" : {type: String},
    "productID" : {type: Number},
    "quantity" : {type: Number}
  }, {collection: 'locations'});

  module.exports=mongoose.model('location', locationModel);