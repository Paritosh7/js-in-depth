const { sum, subtract } = require("./math.js");
const assert = require("assert");

let result, expected;

result = sum(1, 2);
expected = -1;

assert.strictEqual(result, expected);

result = subtract(5, 3);
expected = 2;

assert.strictEqual(result, expected);
