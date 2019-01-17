/* //Here or in "controllers/maincontroller.js"

var db = require("../models");


 
// Injects customers input onto the table.
router.post("/api/requests", function (req, res) {
    db.Customer.create(req.body);
});


// Going to api shows entire object.
router.get("/api/requests", function (req, res) {
    db.Customer.findAll({})
    .then(function(dbCustomer) {
        res.json(dbCustomer);
    });
});
  
 */
