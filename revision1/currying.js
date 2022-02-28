function currying(func) {
  return function curried(...args1) {
    if (args1.length >= func.length) {
      return func(...args1);
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

const curriedLog = currying(log);
// Parital of the log.
const logNow = curriedLog(new Date());
logNow("low", "Something is new");
