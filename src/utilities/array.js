import { add, mul } from "./math.js";

export function head(x) {
  return x[0];
}

export function tail(x) {
  return x.slice(1);
}

export function product(x) {
  return x.reduce(mul, 1);
}

export function sum(x) {
  return x.reduce(add, 0);
}

export function countWhereTrue(list, predicate) {
  return list.reduce((count, x) => predicate(x) ? count + 1: count, 0);
}