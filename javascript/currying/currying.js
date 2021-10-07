function curry(fn) {
  return function curried(...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    } else {
      return function (...args2) {
        let args = [...args1, ...args2];
        return curried(...args);
      };
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3, 4));

// function a(...rest) {
//   b(...rest);
// }

// function b(a, b, c) {
//   console.log(a, b, c);
// }

// a(1, 22, 3);
