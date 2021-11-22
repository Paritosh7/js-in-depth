const { sum, subtract } = require("./math.js");

function expect(result) {
  return {
    toBe(expected) {
      if (result != expected) {
        throw Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

expect(sum(2, 3)).toBe(4);
expect(subtract(5, 2)).toBe(3);
