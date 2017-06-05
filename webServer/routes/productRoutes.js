var express = require('express');

var routes = function (product) {
  var apiRouter = express.Router();
  apiRouter.route('/featured')
    .get(function (req, res) {
    product.find({"featured": true}, function(err, products) {
      if (err)
        res.status(500).send(err);
      else
        res.json(products);
    });
  });
  apiRouter.route('/')
    .get(function (req, res) {
      var search = req.query.search;
      var regex = new RegExp(search, "i");
      product.find({"name" : regex}, function(err, products){
        if (err)
          res.status(500).send(err);
        else
          res.json(products);
      });
    })
    .post(function (req, res) {
      var p = new product(req.body);
      p.save();
      res.status(201).send(p);
    });

  apiRouter.route('/:productID([0-9]{1,7})').get(function (req, res, next) {
    var productID = req.params.productID;
    product.findOne({"productID" : productID }, function (err, product) {
      if (err) {
        res.status(500).send(err);
      } else if (product) {
        res.json(product);
      } else {
        res.status(404).send("No product with that Id");
      }
    })
  });

  apiRouter.route('/:productId')
    .get(function (req, res) {
      res.json(req.product);
    })
    .put(function (req, res) {
      for (var key in req.product) {
        if (key in req.body)
          req.product[key] = req.body[key];
      }
      req.product.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send("Product replaced");
      });
    })
    .patch(function (req, res) {
      if (req.body._id)
        delete req.body._id;
      for (var key in req.body) {
        if (key in req.product)
          req.product[key] = req.body[key];
      }
      req.product.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send("product updated");
      });
    })
    .delete(function (req, res) {
      req.product.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      });
    });
  return apiRouter;

};
module.exports = routes;

