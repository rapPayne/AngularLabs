var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan'); // logger
var path = require('path');
var app = express();
app.set('port', (process.env.PORT || 3000));

//app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev')); // Should be logging to the console

mongoose.connect('mongodb://localhost/wms');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');

  // APIs
  /*
  // select all
  app.get('/customers', function (req, res) {
    customers.find({}, function (err, docs) {
      if (err) return console.error(err);
      res.json(docs);
    });
  });

  // create
  app.post('/customers', function (req, res) {
    var obj = new Cat(req.body);
    obj.save(function (err, obj) {
      if (err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  // find by id
  app.get('/customers/:customerID', function (req, res) {
    Cat.findOne({ customerID: req.params.customerID }, function (err, obj) {
      if (err) return console.error(err);
      res.json(obj);
    })
  });

  // update by id
  app.put('/customers/:customerID', function (req, res) {
    Cat.findOneAndUpdate({ customerID: req.params.customerID }, req.body, function (err) {
      if (err) return console.error(err);
      res.sendStatus(200);
    })
  });

  // delete by id
  app.delete('/customers/:customerID', function (req, res) {
    Cat.findOneAndRemove({ customerID: req.params.customerID }, function (err) {
      if (err) return console.error(err);
      res.sendStatus(200);
    });
  });
*/
  // Models
  var categoryModel = require('./models/category.model.js');
  var customerModel = require('./models/customer.model.js');
  var locationModel = require('./models/location.model.js');
  var orderModel = require('./models/order.model.js');
  var productModel = require('./models/product.model.js');

  // API Routes (For Ajax requests)
  var categoryRouter = require('./routes/categoryRoutes.js')(categoryModel);
  var customerRouter = require('./routes/customerRoutes.js')(customerModel);
  var locationRouter = require('./routes/locationRoutes.js')(locationModel);
  var orderRouter = require('./routes/orderRoutes.js')(orderModel);
  var productRouter = require('./routes/productRoutes.js')(productModel);
  app.use('/api/categories', categoryRouter);
  app.use('/api/customers', customerRouter);
  app.use('/api/locations', locationRouter);
  app.use('/api/orders', orderRouter);
  app.use('/api/products', productRouter);

  // all other routes are handled by Angular
  app.use(express.static(__dirname + "/warehouse/dist/"));

  app.listen(app.get('port'), function () {
    console.log('Warehouse Server listening. Point your browser at http://localhost:' + app.get('port'));
  });
});

module.exports = app;