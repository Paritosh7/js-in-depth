const { substract, sum } = require("./math");

let expected, result;

result = sum(4, 99);
expected = 103;
if (result != expected) {
  throw new Error(`${expected} is not equal to ${result}`);
}

result = substract(10, 6);
expected = 5;
if (result != expected) {
  throw new Error(`${expected} is not equal to ${result}`);
}
