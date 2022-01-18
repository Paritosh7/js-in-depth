function throttle(func, delay) {
  let flag = true;
  return function (...args) {
    if (flag) func(...args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}
