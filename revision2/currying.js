function currying(fn) {
  return function curried(...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    } else {
      return function (...args2) {
        var args = [...args1, ...args2];
        return curried(...args);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curried = currying(add);

console.log(curried(4, 5)(5));
