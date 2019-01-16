/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var customer = require("../models/customer.js");
var db = require("../models/");

//Home Page, gets All the burgers.
router.get("/", function(req, res) {
// console.log("hello");
customer.findAll().then(function (response) {
  console.log(response);
});
    console.log(hbsObject);
    res.render("index", hbsObject);
  });


// Exports to server.js
module.exports = router;
