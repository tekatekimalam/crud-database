// "use strict";

const response = require("./res");
const connection = require("./connection");

// Index
exports.index = function (req, res) {
  response.ok("Aplikasi restAPI berjalan", res);
};

// All data from mahasiswa
exports.mahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", (err, rows, fields) => {
    if (err) {
      connection.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};
