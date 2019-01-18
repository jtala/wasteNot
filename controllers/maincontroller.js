/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");

//  ----------------------- Home

router.get("/", function (req, res) {
  res.render("index");
});


//  ----------------------- Logins

// Injects login information onto Customers table & reroutes to requests.
router.post("/api/login", function (req, res) {
  db.Customer.create(req.body);
});

// Going to this url shows JSON of all the login information
router.get("/api/login", function (req, res) {
  db.Customer.findAll({})
    .then(function (dbLogins) {
      res.json(dbLogins);
    });
});



//  ----------------------- Drivers 

router.get("/drive", function (req, res) {
  db.Request.findAll().then(function (data) {
    var hbsObject = {
      customers: data
    };
    res.render("drive", hbsObject);
  });
});

router.put("/requests/update/:id", function (req, res) {
  db.Customer.update({
    request_status: true
  },{
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      console.log(data);
      // is this the correct way of displaying data
      res.json(data);
    });
});

//  ----------------------- Requests 

router.get("/requests", function (req, res) {
  res.render("requests");
});


// URL shows JSON of all requests.
router.get("/api/requests", function (req, res) {
  db.Request.findAll({})
    .then(function (dbRequest) {
      res.json(dbRequest);
    });
});

// Injects customer input onto requests table.
router.post("/api/requests", function (req, res) {
  db.Request.create(req.body);
});

// Exports to server.js
module.exports = router;
