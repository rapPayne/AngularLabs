var express = require('express');

var routes = function (locations) {
  var apiRouter = express.Router();
  apiRouter.route('/')
    .get(function (req, res) {
      locations.find(function (err, locationsEntries) {
        if (err)
          res.status(500).send(err);
        else
          res.json(locationsEntries);
      });

    })
    .post(function (req, res) {
      var e = new locations(req.body);
      e.save();
      res.status(201).send(e);
    });

  // Get all locations for the productID
  apiRouter.route('/forProduct/:productID').get((req, res) => {
    const productID = req.params.productID;
    locations.find({ "productID": productID }, (err, locationEntries) => {
      if (err)
        res.status(500).send(err);
      else if (locationEntries)
        res.json(locationEntries);
      else
        res.status(404).send("I can't find that productID in stock.");
    });
  });

  // Middleware insertion - intercept the request and do the find.
  //TODO: Authorize the user ... make sure his userID can read this locationID
  //TODO: Should probably create a route for locationID as well. Will have to use Regex whent the time comes. productID is completely numeric. Locations are 4-char alphanumeric
  //TODO: Should also have this return all rows and have the client pick the one with the right amount of locations.

  apiRouter.use('/:locationID', function (req, res, next) {
    console.log("location ID")
    var locationID = req.params.locationID;
    locations.findOne({ "locationID": locationID }, function (err, location) {
      if (err)
        res.status(500).send(err);
      else if (location) {
        req.location = location;
        next();
      } else {
        res.status(404).send('No locations entry with that locationID.');
      }
    });
  });

  apiRouter.route('/:locationID')
    .get(function (req, res) {
      res.json(req.locations);
    })
    .put(function (req, res) {
      for (var key in req.locations) {
        if (key in req.body)
          req.locations[key] = req.body[key];
      }
      req.locations.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
        // Could also be "res.status(200).json(req.locations);"
      });
    })
    .patch(function (req, res) {
      if (req.body._id)
        delete req.body._id;
      for (var key in req.body) {
        if (key in req.locations) {
          req.locations[key] = req.body[key];
        }
      }
      req.locations.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      });
    })
    .delete(function (req, res) {
      req.locations.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      })
    });
  return apiRouter;

};
module.exports = routes;

