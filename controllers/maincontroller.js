/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var customer = require("../models/customer.js");

// redirects to home
router.get("/", function(req, res) {
  res.redirect("/home");
});

//This Page gets all the customer request data.
router.get("/home", function(req, res) {
    res.render("index");
});

router.get("/drive", function(req, res) {
  customer.selectall(function(data) {
    var hbsObject = {
      customers: data
    };
    res.render("drive", hbsObject);
  });
});

router.get("/requests", function(req, res) {
  customer.selectall(function(data) {
    var hbsObject = {
      customers: data
    };
    res.render("requests", hbsObject);
  });
});



// Exports to server.js
module.exports = router;
