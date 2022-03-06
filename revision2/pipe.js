function pipe(fn) {
  fn.reduce((acc, curr) => {
    return curr(acc);
  }, 4);
}

function addTwo(num) {
  return a + 2;
}

function multiplyBy5(num) {
  return num * 5;
}

function subtractBy4(num) {
  return num - 4;
}
