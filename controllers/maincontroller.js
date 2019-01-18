/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");

//  ----------------------- Home

router.get("/", function (req, res) {
  res.render("index");
  



  
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
router.get("/track", function (req, res) {
  res.render("track");
});



// Exports to server.js
module.exports = router;
