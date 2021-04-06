const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send("Hello from server, this is home page");
});

// Listening server
app.listen(5000, () =>
  console.log("******** server running on port 5000 ********"),
);
