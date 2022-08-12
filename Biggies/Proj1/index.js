let express = require("express");
let ejs = require("ejs");

let app = express();

// port to listen
app.listen(8080);

// creating srever
// localhost:8080
app.get("/", function (req, res) {
  res.send("Hello!");
});
