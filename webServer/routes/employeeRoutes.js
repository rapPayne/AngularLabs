var express = require('express');

var routes = function (employee) {
  var apiRouter = express.Router();
  apiRouter.route('/')
    .get(function (req, res) {
      employee.find(function(err, employees){
        if (err)
          res.status(500).send(err);
        else
          res.json(employees);
      });
    })
    .post(function (req, res) {
      var e = new employee(req.body);
      e.save();
      res.status(201).send(e);
    });

  // Middleware insertion - intercept the request and do the find.
  apiRouter.use('/:employeeId', function (req, res, next) {
    employee.findById(req.params.employeeId, function(err, employee){
      if (err)
        res.status(500).send(err);
      else if (employee) {
        req.employee = employee;
        next();
      } else {
        res.status(404).send('No employee with that Id.');
      }
    });
  });

  apiRouter.route('/:employeeId')
    .get(function (req, res) {
      res.json(req.employee);
    })
    .put(function (req, res) {
      for (var key in req.employee) {
        if (key in req.body)
          req.employee[key] = req.body[key];
      }
      req.employee.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
        // Could also be "res.status(200).json(req.employee);"
      });
    })
    .patch(function (req, res) {
      if (req.body._id)
        delete req.body._id;
      for (var key in req.body) {
       if (key in req.employee) {
         req.employee[key] = req.body[key];
       }
      }
      req.employee.save(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      });
    })
    .delete(function (req, res) {
      req.employee.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send();
      })
    });
  return apiRouter;

};
module.exports = routes;

