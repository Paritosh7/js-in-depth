/**
 * If a thisArg parameter is provided, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.
 * */

Array.prototype.myMap = function myMap(cb, thisArg) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr[i] = cb.call(thisArg, this[i], i, this);
  }

  return arr;
};

const arr = [12, 1, 3, 11, 22];
// const newArr = arr.map((ele) => ele * 2);

// console.log(arr);
// console.log(newArr);
// console.log(arr);

console.log(arr.myMap((e) => e * 2));
