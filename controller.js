// "use strict";

const response = require("./res");
const connection = require("./connection");

exports.index = function (req, res) {
  response.ok("Aplikasi restAPI berjalan", res);
};

// const index = (req, res) => {
//   response.ok("Aplikasi restAPI berjalan", res);
// };

// module.exports = index;
