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

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

const curriedLog = curry(log);
const logNow = curriedLog(new Date());
console.log(logNow("moderate", "something"));
