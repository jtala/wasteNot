// Dependencies
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// More Dependency Installation..




// img reference is static
app.use(express.static(__dirname + '/public'));


// JSON translator
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// install handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/maincontroller.js");

app.use(routes);



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
  