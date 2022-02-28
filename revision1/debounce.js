function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.call(null, args);
    }, delay);
  };
}

function a() {
  console.log("I should be debounced");
}

const debouncedFunc = debounce(a, 1000);
