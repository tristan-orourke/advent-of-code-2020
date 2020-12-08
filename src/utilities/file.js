import fs from "fs";

export function readLines(filePath) {
  return fs.readFileSync(filePath).toString().split("\n");
}