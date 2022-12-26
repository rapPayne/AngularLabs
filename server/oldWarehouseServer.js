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

  // static routes
  app.use('/assets', express.static(path.join(__dirname, "/../warehouse/src/assets/")));

  // all other routes are handled by Angular
  app.use(express.static(__dirname + "../warehouse/src"));

  app.listen(app.get('port'), function () {
    console.log('Warehouse Server listening. Point your browser at http://localhost:' + app.get('port'));
  });
});

module.exports = app;