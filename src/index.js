import { readLines } from "./utilities/file.js";

console.log("Hello world");

const day1Lines = readLines("data/day1-1.txt");
console.log(day1Lines[1]);
console.log(day1Lines.length);
console.log((new Set(day1Lines)).size);