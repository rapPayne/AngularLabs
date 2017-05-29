var express = require('express');
var hasher = require('../auth/hasher');

var routes = function (user, customer) {
  var apiRouter = express.Router();

  //Provide the currently logged in user.
  apiRouter.route('/')
    .get(function (req, res) {
      res.json(req.user);
    });
    //Adding a new user
//    .post(function (req, res) {
//      var u = new user(req.body);
//      var c = new customer(req.body);
//      var salt = hasher.createRandomSalt();
//      var passwordHash = hasher.hashPassword(req.body.password, salt);
//      var customerID = hasher.getRandomCustomerID();
//      var contactName = u.firstName + " " + u.lastName;
//      //TODO: Make sure this insert is valid:
//      //Username is not already taken
//      u.salt = salt;
//      u.passwordHash = passwordHash;
//      u.save().then(function () {
//        c.contactName = contactName;
//        c.contactTitle = "Buyer";
//        c.customerID = customerID;
//        c.save();
//      });
//      res.status(201).send(u);
//    });

  // Middleware insertion - intercept the request and do the find based on username and password.
//  apiRouter.use('/:username', function (req, res, next) {
//    //TODO: Read his/her record based on username and password.  Currently only username.
//    user.find({ "username": req.params.username }, function(err, user){
//      if (err)
//        res.status(500).send(err);
//      else if (user) {
//        req.user = user;
//        console.log("logging on", req.user, req.session);
//        req.session.user = req.user;  // Store the user in session for subsequent requests.  Will time out in 20 minutes.
//        next();
//      } else {
//        res.status(404).send('No user with that name.');
//      }
//    });
//  });

//  apiRouter.route('/:username')
//    .get(function (req, res) {
//      //TODO: Make sure user is authorized to read his own data
//      res.json(req.user);
//    })
//    .put(function (req, res) {
//      for (var key in req.user) {
//        if (key in req.body)
//          req.employee[key] = req.body[key];
//      }
//      req.employee.save(function (err) {
//        if (err)
//          res.status(500).send(err);
//        else
//          res.status(204).send();
//        // Could also be "res.status(200).json(req.employee);"
//      });
//    })
//    .patch(function (req, res) {
//      if (req.body._id)
//        delete req.body._id;
//      for (var key in req.body) {
//        if (key in req.employee) {
//          req.employee[key] = req.body[key];
//        }
//      }
//      req.employee.save(function (err) {
//        if (err)
//          res.status(500).send(err);
//        else
//          res.status(204).send();
//      });
//    })
//    .delete(function (req, res) {
//      req.employee.remove(function (err) {
//        if (err)
//          res.status(500).send(err);
//        else
//          res.status(204).send();
//      })
//    });
  return apiRouter;

};
module.exports = routes;

