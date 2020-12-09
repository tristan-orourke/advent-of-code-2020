import { readLines } from "../utilities/file.js";
import { countTreesOnPath, locationHasTree } from "./day3.js";

describe("day3", () => {
  describe("locationHasTree", () => {
    it("Treats x and y axis correctly", () => {
      const map = ["..#.","#..."];
      expect(locationHasTree([2,0], map)).toBe(true);
      expect(locationHasTree([0,1], map)).toBe(true);
      expect(locationHasTree([1,0], map)).toBe(false);
    })
  })
  describe("countTreesOnPath", () => {
    const map = readLines("data/day3-test.txt");
    it("gets first example right", () => {      
      expect(countTreesOnPath([3,1], map)).toBe(7);
    });
    it("gets other examples right", () => {      
      expect(countTreesOnPath([1,1], map)).toBe(2);
      expect(countTreesOnPath([3,1], map)).toBe(7);
      expect(countTreesOnPath([5,1], map)).toBe(3);
      expect(countTreesOnPath([7,1], map)).toBe(4);
      expect(countTreesOnPath([1,2], map)).toBe(2);
    });
  });
});