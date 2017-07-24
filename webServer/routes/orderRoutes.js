var express = require('express');

var routes = function (orderModel) {
  var apiRouter = express.Router();

  apiRouter.get('/readyToShip', function (req, res) {
    orderModel.find({ "status": 0 }, function (err, orders) {
      console.log("Getting orders that are ready to ship");
      res.json(orders);
      //res.status(404).send("All orders have shipped. Nothing to pick.");
    })
  });

// Order statuses: 0=ready to ship. 1=shipped. 2=problem with order
  apiRouter.patch('/:orderID/markAsShipped', function (req, res) {
    const orderID = req.params.orderID;
    orderModel.findOne({ "orderID": orderID }, function (err, order) {
      if (!order)
        res.status(404).send();
      else if (err)
        res.status(500).send(err);
      else {
        order["status"] = 1; // 1 = shipped order
        order.save(function (err) {
          if (err)
            res.status(500).send(err);
          else
            res.status(204).send();
        });
      }
    });
  });

  apiRouter.patch('/:orderID/markAsProblem', function (req, res) {
    const orderID = req.params.orderID;
    orderModel.findOne({ "orderID": orderID }, function (err, order) {
      if (!order)
        res.status(404).send();
      else if (err)
        res.status(500).send(err);
      else {
        order["status"] = 2; // 2 = problem order
        order.save(function (err) {
          if (err)
            res.status(500).send(err);
          else
            res.status(204).send();
        });
      }
    });
  });

  apiRouter.route('/')
    .get(function (req, res) {
      orderModel.find(function (err, orders) {
        if (err)
          res.status(500).send(err);
        else
          res.json(orders);
      });
    })
    .post(function (req, res) {
      var e = new orderModel(req.body);
      e.save();
      res.status(201).send(e);
    });

  // Middleware insertion - intercept the request and do the find.
  //TODO: Authorize the user ... make sure his userID can read this orderID
  apiRouter.use('/:orderID', function (req, res, next) {
    var orderID = req.params.orderID;
    if (orderID === "getNextOrderToShip") {
      console.log("in get order")
    } else {
      orderModel.findOne({ "orderID": orderID }, function (err, order) {
        if (err)
          res.status(500).send(err);
        else if (order) {
          req.order = order;
          next();
        } else {
          res.status(404).send('No order with that orderID.');
        }
      });
    }
  });

  apiRouter.route('/:orderID')
    .get(function (req, res) {
      res.json(req.order);
    })
    .put(function (req, res) {
      for (var key in req.order) {
        if (key in req.body)
          req.order[key] = req.body[key];
      }
      req.order.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
        // Could also be "res.status(200).json(req.order);"
      });
    })
    .patch(function (req, res) {
      if (req.body._id)
        delete req.body._id;
      for (var key in req.body) {
        if (key in req.order) {
          req.order[key] = req.body[key];
        }
      }
      req.order.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      });
    })
    .delete(function (req, res) {
      req.order.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      })
    });
  return apiRouter;

};
module.exports = routes;

