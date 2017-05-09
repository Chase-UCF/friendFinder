var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

apiRoutes(app);
htmlRoutes(app);