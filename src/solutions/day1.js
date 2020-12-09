import { head, sum, tail } from "../utilities/array.js";

export function makeCombinationIndexIterator(n, k) {
  if (n < k) {
    throw new Error(`Cannot generate combinations of ${k} elements from list of length ${list.length}`);
  }
  function nextIndeces(lastValue) {
    // Start at the last index, try to increment it.
    // If last index can't be incremented, try next last index, and set last index to directly after.
    for (let i=1; i <= k; i++) {
      const index = k-i; // Index is decreasing from (k-1) to 0; going through lastValue backwards.
      const indexValue = lastValue[index];
      if (indexValue < (n-i)) {
        const value = lastValue.map((x, mapIndex) => {
          // Increment the value at index, and set the value of later indexes to one higher.
          if (mapIndex >= index) {
            return indexValue + 1 + (mapIndex-index);
          }
          // Lower index values are unchanged.
          return x;
        });
        return {value, done: value[0] == n - k };
      }
    }
    return {value: lastValue, done: true};
  }
  let value = [];
  for (let i = 0; i < k; i++) {
    value.push(i);
  }
  let result = {
    value,
    done: value[0] == n - k 
  }
  const iterator = {
    next: () => {
      const thisResult = result;
      result = nextIndeces(thisResult.value);
      return thisResult;
    }
  }
  return iterator;
}

export function makeCombinationIterator(list, k) {
  const indexIterator = makeCombinationIndexIterator(list.length, k);
  let indexValue = indexIterator.next();
  const iterator = {
    next: () => {
      const result = {
        value: indexValue.value.map(i => list[i]),
        done: indexValue.done
      };
      indexValue = indexIterator.next();
      return result;
    }
  };
  return iterator;
}

export function find3NumsWithTargetSum(numbers, targetSum) {
  const combinationIterator = makeCombinationIterator(numbers, 3);
  let result = combinationIterator.next();
  while (!result.done) {
    if (sum(result.value) === targetSum) {
      return result.value;
    }
    result = combinationIterator.next();
  }
  throw new Error("Did not find 3 numbers with target sum");
}

/**
 * 
 * @param number[] numbers
 * @param number targetSum 
 * @returns number[] An array of two numbers that sum to targetSum
 */
export function find2NumsWithTargetSum(numbers, targetSum) {
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
  return find2NumsWithTargetSum(rest, targetSum);
}