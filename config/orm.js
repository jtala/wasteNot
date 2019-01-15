var connection = require("./connection.js");

var orm = {
    selectall: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    }
}

// Exports to  models/customer.js
module.exports = orm;