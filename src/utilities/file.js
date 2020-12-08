const fs = require("fs");

function readLines(filePath) {
  return fs.readFileSync(filePath).toString().split("\n");
}

module.exports = {
  readLines
}