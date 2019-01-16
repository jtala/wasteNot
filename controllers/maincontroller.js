/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");


//Home Page, gets All the burgers.
router.get("/", function (req, res) {
  console.log(db.Customer);
  db.Customer.findAll().then(function (response) {
    console.log(response);
  });
  console.log(hbsObject);
  res.render("index", hbsObject);
});


// Exports to server.js
module.exports = router;
