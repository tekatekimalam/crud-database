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
exports.idMahasiswa = (req, res) => {
  let { id } = req.params;
  const commandSql = `SELECT * FROM mahasiswa WHERE id = ${id}`;

  connection.query(commandSql, (err, rows, fields) => {
    return err ? connection.log(err) : response.ok(rows, res);
  });
};

// Post data mahasiswa
exports.postMahasiswa = (req, res) => {
  const { id, nim, nama, jurusan } = req.body;
  const commandSql = `INSER INTO mahasiswa(id, nim, nama, jurusan) VALUES(${id}, ${nim}, ${nama}, ${jurusan})`;

  connection.query(commandSql, (err, rows, fields) => {
    return err
      ? console.log(err)
      : response.ok("Data berhasil ditambahkan", res);
  });
};

// Update data mahasiswa
exports.updateMahasiswa = (req, res) => {
  const { id, nim, nama, jurusan } = req.body;
  const commandSql = `UPDATE mahasiswa SET nim=${nim}, nama=${nama}, jurusan=${jurusan} WHERE id=${id};`;

  connection.query(commandSql, (err, rows, fields) => {
    err ? console.log(err) : response.ok("Data berhasil diperbaharui", res);
  });
};

// Delete data mahasiswa based on id
exports.deleteMahasiswa = function (req, res) {
  const { id } = req.body;
  const commandSql = `DELETE FROM mahasiswa WHERE id_mahasiswa=${id}`;

  connection.query(commandSql, (err, rows, fields) => {
    return err ? console.log(err) : response.ok("Berhasil dihapus", res);
  });
};
