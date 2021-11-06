let cached = {};

function memoizeAddByOne(num) {
  if (cached[num] === undefined) {
    cached[num] = num + 1;
  }
  return cached[num];
}
