function sum(a) {
  function f(b) {
    a = a + b;
    console.log(a);
    return f;
  }

  f.toString = function () {
    return +a;
  };

  return f;
}

console.log(sum(1)(2)(3)(4) == 10);
