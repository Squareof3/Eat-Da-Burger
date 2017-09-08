var express = require("epress");

var methodOverried = require("method-override");

var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended:false}));

app.use(methodOverried("_method"));

var exphbs = require("express-handlebars");
 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes= require("./controllers/burgers_controller.js");

app.ues("/", routes);

app.listen(port);
