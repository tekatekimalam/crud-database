module.exports = function (app) {
  const json = require("./controller");

  app.route("/mahasiswa").get(json.mahasiswa);

  app.route("/mahasiswa/:id").get(json.idMahasiswa);

  app.route("/tambah-mahasiswa").post(json.postMahasiswa);

  app.route("/ubah-mahasiswa").put(json.updateMahasiswa);

  app.route("/hapus-id-mahasiswa").delete(json.deleteMahasiswa);
};
