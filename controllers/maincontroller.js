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




// Going to api shows entire object.
router.get("/api/requests", function (req, res) {
  db.Customer.findAll({})
  .then(function(dbCustomer) {
      res.json(dbCustomer);
  });
});

// Injects customers input onto the table.
router.post("/api/requests", function (req, res) {
  db.Customer.create(req.body);
});





// Exports to server.js
module.exports = router;
