import { findNumsWithTargetSum } from "./solutions/day1.js";
import { product } from "./utilities/array.js";
import { toNumber } from "./utilities/conversion.js";
import { readLines } from "./utilities/file.js";

console.log("Hello world");

const day1Lines = readLines("data/day1-1.txt");
const day1Input = day1Lines.map(toNumber);
console.log("1-1: ", product(findNumsWithTargetSum(day1Input, 2020)));