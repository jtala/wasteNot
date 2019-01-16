/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");

// redirects to home
// router.get("/", function(req, res) {
//   res.redirect("/home");
// });

router.get("/", function (req, res) {
  console.log(db.Customer);
  db.Customer.findAll().then(function (data) {
    console.log(data);
    var hbsObject = {
      customers: data
    };
    console.log(hbsObject);
  res.render("index", hbsObject);
  });
});

//This Page gets all the customer request data.
// router.get("/home", function(req, res) {
//     res.render("index");
// });

// router.get("/drive", function(req, res) {
//   customer.selectall(function(data) {
//     var hbsObject = {
//       customers: data
//     };
//     res.render("drive", hbsObject);
//   });
// });

// router.get("/requests", function(req, res) {
//   customer.selectall(function(data) {
//     var hbsObject = {
//       customers: data
//     };
//     res.render("requests", hbsObject);

// //Home Page, gets All the burgers.
// router.get("/", function (req, res) {
//   console.log(db.Customer);
//   db.Customer.findAll().then(function (response) {
//     console.log(response);
//   });
//   console.log(hbsObject);
//   res.render("index", hbsObject);
// });



// Exports to server.js
module.exports = router;
