function debounce(func) {
  var timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, 2000);
  };
}

function add(a, b) {
  return console.log("debounced", a + b);
}

const debouncedFunc = debounce(add);

debouncedFunc(1, 2);
