import { find2NumsWithTargetSum, find3NumsWithTargetSum } from "./solutions/day1.js";
import { countValidPasswordsV1, countValidPasswordsV2 } from "./solutions/day2.js";
import { countTreesOnPath } from "./solutions/day3.js";
import { product } from "./utilities/array.js";
import { toNumber } from "./utilities/conversion.js";
import { readLines } from "./utilities/file.js";

console.log("Hello world");

const day1Lines = readLines("data/day1.txt");
const day1Input = day1Lines.map(toNumber);
console.log("1-1:", product(find2NumsWithTargetSum(day1Input, 2020)));
console.log("1-2:", product(find3NumsWithTargetSum(day1Input, 2020)));

console.log("2-1:", countValidPasswordsV1(readLines("data/day2.txt")));
console.log("2-2:", countValidPasswordsV2(readLines("data/day2.txt")));

const day3Map = readLines("data/day3.txt");
console.log("3-1:", countTreesOnPath([3, 1], day3Map));
console.log("3-2:", product([[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]].map(path => countTreesOnPath(path, day3Map))));