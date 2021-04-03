"use strict";

module.exports = function (app) {
  const json = require("./controller");

  app.route("/").get(json.index);

  app.route("/mahasiswa").get(json.mahasiswa);

  app.route("/mahasiswa/:id").get(json.id_mahasiswa);
};
