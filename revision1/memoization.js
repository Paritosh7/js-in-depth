var cache = {};
function addTwo(input) {
  if (!cache[input]) {
    console.log("I wasn't present");
    cache[input] = input + 2;
    return cache[input];
  }
  console.log("I was memoized");
  return cache[input];
}

addTwo(2);
addTwo(2);
addTwo(3);
