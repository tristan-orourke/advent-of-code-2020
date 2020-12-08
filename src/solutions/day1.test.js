import { findNumsWithTargetSum } from "./day1.js";

describe("day1", () => {
  describe("findNumsWithTargetSum", () => {
    it("finds expected numbers", () => {
      const list = [1721, 979, 366, 299, 675, 1456];
      expect(findNumsWithTargetSum(list, 2020)).toEqual([1721, 299]);
    })
  })
});