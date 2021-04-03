// "use strict";

const response = require("./res");
const connection = require("./connection");

// Index
exports.index = function (req, res) {
  response.ok("Aplikasi restAPI berjalan", res);
};

// All data from mahasiswa
exports.mahasiswa = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (err, rows, fields) => {
    return err ? connection.log(err) : response.ok(rows, res);
  });
};

// Get data based on id_mahasiswa
exports.id_mahasiswa = (req, res) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM mahasiswa WHERE id = ${id}`,
    (err, rows, fields) => {
      return err ? connection.log(err) : response.ok(rows, res);
    },
  );
};
