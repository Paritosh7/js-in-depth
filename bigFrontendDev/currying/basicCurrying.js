function curry(fn) {
  return function (arg1) {
    return function (arg2) {
      fn(arg1, arg2);
    };
  };
}

function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);
console.log(curriedSum(2));
