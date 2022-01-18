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

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3));
