var express = require('express');

var routes = function (customer) {
  var apiRouter = express.Router();
  apiRouter.route('/')
    .get(function (req, res) {
      customer.find(function (err, customers) {
        if (err)
          res.status(500).send(err);
        else
          res.json(customers);
      });

    })
    .post(function (req, res) {
      var e = new customer(req.body);
      e.save();
      res.status(201).send(e);
    });

  // Middleware insertion - intercept the request and do the find.
  //TODO: Authorize the user ... make sure his email can read this customerID
  apiRouter.use('/:customerID', function (req, res, next) {
    var customerID = req.params.customerID;
    customer.findOne({ "customerID": customerID }, function (err, customer) {
      if (err)
        res.status(500).send(err);
      else if (customer) {
        req.customer = customer;
        next();
      } else {
        res.status(404).send('No customer with that Id.');
      }
    });
  });

  apiRouter.route('/:customerID')
    .get(function (req, res) {
      res.json(req.customer);
    })
    .put(function (req, res) {
      for (var key in req.customer) {
        if (key in req.body)
          req.customer[key] = req.body[key];
      }
      req.customer.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
        // Could also be "res.status(200).json(req.customer);"
      });
    })
    .patch(function (req, res) {
      if (req.body._id)
        delete req.body._id;
      for (var key in req.body) {
        if (key in req.customer) {
          req.customer[key] = req.body[key];
        }
      }
      req.customer.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      });
    })
    .delete(function (req, res) {
      req.customer.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      })
    });
  return apiRouter;

};
module.exports = routes;