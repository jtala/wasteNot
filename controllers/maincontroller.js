/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var customer = require("../models/customer.js");

//Home Page, gets All the burgers.
router.get("/", function(req, res) {

customer.selectall(function(data) {
    var hbsObject = {
      customers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// Exports to server.js
module.exports = router;
