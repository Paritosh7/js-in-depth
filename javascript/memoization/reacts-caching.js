let previousInput, previousResult;

function square(input) {
  if (input === previousInput) {
    console.log("I was the last input");
    return previousResult;
  }
  console.log("I am new");
  previousInput = input;
  previousResult = input * input;
  return previousResult;
}

console.log(square(4));
console.log(square(4));
console.log(square(5));
console.log(square(4));
