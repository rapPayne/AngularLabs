var express = require('express');

var routes = function (inventory) {
  var apiRouter = express.Router();
  apiRouter.route('/')
    .get(function (req, res) {
      inventory.find(function(err, inventoryEntries){
        if (err)
          res.status(500).send(err);
        else
          res.json(inventoryEntries);
      });

    })
    .post(function (req, res) {
      var e = new inventory(req.body);
      e.save();
      res.status(201).send(e);
    });

  // Middleware insertion - intercept the request and do the find.
  //TODO: Authorize the user ... make sure his userID can read this inventoryID
  //TODO: Should probably create a route for locationID as well. Will have to use Regex whent the time comes. productID is completely numeric. Locations are 4-char alphanumeric
  //TODO: Should also have this return all rows and have the client pick the one with the right amount of inventory.
  apiRouter.use('/:productID', function (req, res, next) {
    var productID = req.params.productID;
    inventory.findOne({"productID":productID}, function(err, inventory){
      if (err)
        res.status(500).send(err);
      else if (inventory) {
        req.inventory = inventory;
        next();
      } else {
        res.status(404).send('No inventory Entry with that productID.');
      }
    });
  });

  apiRouter.route('/:inventoryID')
    .get(function (req, res) {
      res.json(req.inventory);
    })
    .put(function (req, res) {
      for (var key in req.inventory) {
        if (key in req.body)
          req.inventory[key] = req.body[key];
      }
      req.inventory.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
        // Could also be "res.status(200).json(req.inventory);"
      });
    })
    .patch(function (req, res) {
      if (req.body._id)
        delete req.body._id;
      for (var key in req.body) {
       if (key in req.inventory) {
         req.inventory[key] = req.body[key];
       }
      }
      req.inventory.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      });
    })
    .delete(function (req, res) {
      req.inventory.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      })
    });
  return apiRouter;

};
module.exports = routes;

