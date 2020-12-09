import { countWhereTrue } from "../utilities/array.js";
import { stringToArray } from "../utilities/conversion.js";

/**
 * 
 * @param number[] location A array of [x, y]
 * @param string[] map An array of strings, representing rows of the map. '#' in string represents tree.
 */
export function locationHasTree(location, map) {
  const [x,y] = location;
  const row = stringToArray(map[y]);
  return row[x % row.length] === "#";
}

export function countTreesOnPath(path, map) {
  const locations = [];
  const [x, y] = path;
  for (let i = 0; (i*y)<map.length; i+=1) {
    locations.push([x*i, y*i]);
  }
  return countWhereTrue(locations, (x) => locationHasTree(x, map));
}
