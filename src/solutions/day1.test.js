import { find2NumsWithTargetSum, find3NumsWithTargetSum, makeCombinationIndexIterator, makeCombinationIterator } from "./day1.js";

describe("day1", () => {
  describe("find2NumsWithTargetSum", () => {
    it("finds expected numbers", () => {
      const list = [1721, 979, 366, 299, 675, 1456];
      expect(find2NumsWithTargetSum(list, 2020)).toEqual([1721, 299]);
    });
  });
  describe("find3NumsWithTargetSum", () => {
    it("finds expected numbers", () => {
      const list = [1721, 979, 366, 299, 675, 1456];
      expect(find3NumsWithTargetSum(list, 2020)).toEqual([979, 366, 675]);
    });
  });
  describe("makeCombinationIndexIterator", () => {
    it("correctly makes combinations of 2 from set of 3", () => {
      const combinationIterator = makeCombinationIndexIterator(3, 2);
      expect(combinationIterator.next()).toEqual({ value: [0, 1], done: false });
      expect(combinationIterator.next()).toEqual({ value: [0, 2], done: false });
      expect(combinationIterator.next()).toEqual({ value: [1, 2], done: true });
      expect(combinationIterator.next()).toEqual({ value: [1, 2], done: true });
    });
  });
  describe("makeCombinationIterator", () => {
    it("correctly makes combinations of 2 from set of 3", () => {
      const combinationIterator = makeCombinationIterator([1, 2, 3], 2);
      expect(combinationIterator.next()).toEqual({ value: [1, 2], done: false });
      expect(combinationIterator.next()).toEqual({ value: [1, 3], done: false });
      expect(combinationIterator.next()).toEqual({ value: [2, 3], done: true });
      expect(combinationIterator.next()).toEqual({ value: [2, 3], done: true });
    });
  });
});