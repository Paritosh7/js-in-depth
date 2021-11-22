// import { sum, substract } from "./math.js";
const { sum, subtract } = require("./math.js");
const assert = require("assert");

let result, expected;

result = sum(1, 4);
expected = 54;

if (result != expected) {
  throw Error(`${result} is not equal to ${expected}`);
}

result = subtract(5, 4);
expected = 1;

if (result != expected) {
  throw Error(`${result} is not equal to ${expected}`);
}
