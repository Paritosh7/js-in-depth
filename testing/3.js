const { sum, substract } = require("./math");
const assert = require("assert");

let expected, result;

function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

result = sum(4, 5);
expected = 10;

expect(result).toBe(expected);

result = substract(4, 5);
expected = 0;

expect(result).toBe(expected);
