"use strict";

exports.ok = function (values, res) {
  const data = {
    status: "ok",
    values: values,
  };

  res.json(data);
  res.end();
};
