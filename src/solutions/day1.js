import { head, tail } from "../utilities/array.js";

/**
 * 
 * @param number[] numbers
 * @param number targetSum 
 * @returns number[] An array of two numbers that sum to targetSum
 */
export function findNumsWithTargetSum(numbers, targetSum) {
  if (numbers.length < 2) {
    throw new Error("No numbers that have desired sum");
  }
  const first = head(numbers);
  const rest = tail(numbers);
  for (const summand of rest) {
    if (first + summand == targetSum) {
      return [first, summand];
    }
  }
  return findNumsWithTargetSum(rest, targetSum);
}