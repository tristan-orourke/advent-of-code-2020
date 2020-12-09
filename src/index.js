import { find2NumsWithTargetSum, find3NumsWithTargetSum } from "./solutions/day1.js";
import { countValidPasswordsV1, countValidPasswordsV2 } from "./solutions/day2.js";
import { product } from "./utilities/array.js";
import { toNumber } from "./utilities/conversion.js";
import { readLines } from "./utilities/file.js";

console.log("Hello world");

const day1Lines = readLines("data/day1.txt");
const day1Input = day1Lines.map(toNumber);
console.log("1-1:", product(find2NumsWithTargetSum(day1Input, 2020)));
console.log("1-2:", product(find3NumsWithTargetSum(day1Input, 2020)));

console.log("2-1:", countValidPasswordsV1(readLines("data/day2.txt")));
console.log("2-1:", countValidPasswordsV2(readLines("data/day2.txt")));