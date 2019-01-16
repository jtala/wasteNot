/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function (req, res) {
  res.render("index");
});

router.get("/requests", function (req, res) {
  res.render("requests");
});

router.get("/api/requests", function (req,res) {
  db.Customer.findAll({})
  .then(function(dbCustomer) {
  res.json(dbCustomer);
  });
});




// Exports to server.js
module.exports = router;
