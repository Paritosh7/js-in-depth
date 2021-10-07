const { sum, substract } = require("./math");
const assert = require("assert");

let expected, result;

result = sum(4, 5);
expected = 9;

assert.strictEqual(result, expected);

result = substract(7, 3);
expected = 5;
assert.strictEqual(result, expected);
