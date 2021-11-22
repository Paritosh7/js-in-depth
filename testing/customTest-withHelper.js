const { sum, subtract } = require("./math.js");

function expect(result) {
  return {
    toBe(expected) {
      if (result != expected)
        throw Error(`${result} is not equal to ${expected}`);
    },
  };
}

// Helper function
function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (err) {
    console.error(`✕ ${title}`);
    console.error(err);
  }
}

test("sum of 2 numbers", () => {
  expect(sum(3, 2)).toBe(4);
});

test("subtraction of 2 numbers", () => {
  expect(subtract(4, 2)).toBe(2);
});
