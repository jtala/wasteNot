var orm = require("../config/orm.js");

var customer ={

    selectall: function(cb) {
        orm.selectall("customer_requests", function(res) {
          cb(res);
        });
    },

};

// Exports to maincontroller.js
module.exports = customer;