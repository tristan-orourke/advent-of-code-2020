import { stringToArray } from "../utilities/conversion.js";


function countChar(s, char) {
  return stringToArray(s).reduce((count, x) => x == char ? count+1 : count, 0);
}

function passwordIsValidV1(policy, password) {
  const charCount = countChar(password, policy.char);
  return policy.min <= charCount && charCount <= policy.max;
}

function passwordIsValidV2(policy, password) {
  const s = stringToArray(password);
  const pos1 = s[policy.min-1] == policy.char;
  const pos2 = s[policy.max-1] == policy.char;
  return (pos1 && !pos2) || (!pos1 && pos2);
}

function parseLine(line) {
  const pattern = /([0-9]+)-([0-9]+) (\w): (\w+)/;
  const match = line.match(pattern);
  return {
    min: match[1],
    max: match[2],
    char: match[3],
    password: match[4],
  }
}

export function countValidPasswordsV1(lines) {
  return lines
    .map(parseLine)
    .reduce((count, parsed) => {
      const {password, ...policy} = parsed;
        return passwordIsValidV1(policy, password) ? count + 1 : count;
    }, 0)
}

export function countValidPasswordsV2(lines) {
  return lines
    .map(parseLine)
    .reduce((count, parsed) => {
      const {password, ...policy} = parsed;
        return passwordIsValidV2(policy, password) ? count + 1 : count;
    }, 0)
}