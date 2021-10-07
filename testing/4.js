const { sum, substract } = require("./math");
const assert = require("assert");

let expected, result;

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (err) {
    console.error(`✕ ${title}`);
    console.error(err);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

test("subtract numbers", () => {
  result = substract(4, 5);
  expected = -1;
  expect(result).toBe(expected);
});

test("add numbers", () => {
  result = sum(7, 9);
  expected = 19;
  expect(result).toBe(expected);
});
