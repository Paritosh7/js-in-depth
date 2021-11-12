let cached = {};

function square(number) {
  if (cached[number] === undefined || cached[number] === null) {
    cached[number] = number * number;
    return cached[number];
  }
  console.log("WHoopady doo! I am already memoized!");
  return cached[number];
}

console.log(square(2));
console.log(square(2));
console.log(square(3));
console.log(square(3));
console.log(square(5));
console.log(cached);
