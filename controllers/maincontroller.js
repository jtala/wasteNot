/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");

//  -------- home and home to login

router.get("/", function (req, res) {
  res.render("home");
  
});

router.get("/index", function(req, res) {
  res.render("index");
});


// Login



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


// Going to api shows entire object.
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




//  ----------------------- Tracking


// adding route to take to tracking page
router.post("/login/:loginData", function (req, res) {
  // var accountType = req.params.loginData.exist_account_type;

  
  console.log(req.params.loginData.exist_account_type);
  db.Customer.findOne({
    where: {
      username: req.params.loginData.exist_login_username
    }
  }).then(function(data) {
    console.log(data);
    if (data)
    res.json(data);
  });
});



// Exports to server.js
module.exports = router;
