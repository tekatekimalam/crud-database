const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(5000, () =>
  console.log("******** server running on port 5000 ********"),
);