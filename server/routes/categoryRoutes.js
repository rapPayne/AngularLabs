var express = require('express');

var routes = function (category) {
  var apiRouter = express.Router();
  apiRouter.route('/')
    .get(function (req, res) {
      category.find(function(err, categories){
        if (err)
          res.status(500).send(err);
        else
          res.json(categories);
      });
    });

  apiRouter.route('/:categoryID([0-9]{1,7})').get(function (req, res, next) {
    var categoryID = req.params.categoryID;
    category.findOne({"categoryID" : categoryID }, function (err, category) {
      if (err) {
        res.status(500).send(err);
      } else if (category) {
        res.json(category);
      } else {
        res.status(404).send("No category with that Id");
      }
    })
  });

  apiRouter.route('/:categoryId')
    .get(function (req, res) {
      res.json(req.category);
    });
  return apiRouter;

};
module.exports = routes;

