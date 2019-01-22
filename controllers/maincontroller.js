//commenting for git


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

//  ----------------------- Logins

// Injects login information onto customers table && requests table.
router.post("/api/login", function (req, res) {
  db.Customer.create(req.body);
  db.Request.create({
    customer: req.body.username
  })
  .then(function(dbLogins) {
    res.json(dbLogins);
  });
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
      requests: data
    };
    res.render("drive", hbsObject);
  });
});

router.put("/drive/update/:id", function (req, res) {
  db.Request.update({
    status: true
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

  db.Request.update(req.body,{
    where: {
      id: 1
    }
  });
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
