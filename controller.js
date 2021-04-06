const connection = require("./connection");

const success = (values, res) => {
  const data = {
    status: "ok",
    values: values,
  };

  res.json(data);
  res.end();
};

// All data from mahasiswa
const mahasiswa = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (err, rows, fields) => {
    return err ? connection.log(err) : success(rows, res);
  });
};

// Get data based on id_mahasiswa
const idMahasiswa = (req, res) => {
  let { id } = req.params;
  const commandSql = `SELECT * FROM mahasiswa WHERE id = ${id}`;

  connection.query(commandSql, (err, rows, fields) => {
    return err ? connection.log(err) : success(rows, res);
  });
};

// Post data mahasiswa
const postMahasiswa = (req, res) => {
  const { id, nim, nama, jurusan } = req.body;
  const commandSql = `INSER INTO mahasiswa(id, nim, nama, jurusan) VALUES(${id}, ${nim}, ${nama}, ${jurusan})`;

  connection.query(commandSql, (err, rows, fields) => {
    return err ? console.log(err) : success("Data berhasil ditambahkan", res);
  });
};

// Update data mahasiswa
const updateMahasiswa = (req, res) => {
  const { id, nim, nama, jurusan } = req.body;
  const commandSql = `UPDATE mahasiswa SET nim=${nim}, nama=${nama}, jurusan=${jurusan} WHERE id=${id};`;

  connection.query(commandSql, (err, rows, fields) => {
    err ? console.log(err) : success("Data berhasil diperbaharui", res);
  });
};

// Delete data mahasiswa based on id
const deleteMahasiswa = function (req, res) {
  const { id } = req.body;
  const commandSql = `DELETE FROM mahasiswa WHERE id_mahasiswa=${id}`;

  connection.query(commandSql, (err, rows, fields) => {
    return err ? console.log(err) : success("Berhasil dihapus", res);
  });
};

module.exports = {
  mahasiswa,
  idMahasiswa,
  postMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
