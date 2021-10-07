function printNumbers(from, to) {
  let timerId = setInterval(function check() {
    if (from > to) clearInterval(timerId);
    console.log(from++);
  }, 1000);
}

printNumbers(0, 5);

cachingDecoratr;
