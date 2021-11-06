const add = (function getAdd() {
  let val = 1;
  return function () {
    val = val + 1;
    return val;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(val);
console.log(add());
console.log(add());
