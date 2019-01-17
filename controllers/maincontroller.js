/*  ---------------DEPENDENCIES --------------------*/
var express = require("express");
var router = express.Router();
var db = require("../models");

//  ----------------------- Home

router.get("/", function (req, res) {
  res.render("index");



 //  ----------------------- Drivers 

  });

router.get("/drive", function(req, res) {
  db.Customer.findAll().then(function(data) {
    var hbsObject = {
      customers: data
    };
    res.render("drive", hbsObject);
  });
});

router.put("/requests/update/:id", function(req, res) {
  db.Customer.update({
    request_status: true
  },
  {
    where: {
    id: req.params.id
    }
  }).then(function (data) {
    console.log(data);
// is this the correct way of displaying data
    res.json("/");
  });
});

//  ----------------------- Requests 

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




//  ----------------------- Tracking


// adding route to take to tracking page
router.get("/track", function(req, res) {
    res.render("track");
});

// router.get("/api/track", function (req, res) {
//   console.log(req);
//   db.Customer.findAll({
//     // where: {
//     //   id: 2
//     // }
//   })
//   .then(function(dbCustomer) {
//     res.json(dbCustomer);
//   });
// });



// Exports to server.js
module.exports = router;
