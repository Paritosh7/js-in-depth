Array.prototype.myFilter = function myFilter(cb, thisArg) {
  const newArr = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (cb.call(thisArg, arr[i], i, arr)) newArr.push(arr[i]);
  }
  return newArr;
};

const newArr = [1, 2, 3, 4, 5].myFilter((ele) => ele % 2 === 0);
const filteredArr = [1, 2, 3, 4, 5].filter((ele) => ele % 2 === 0);

console.log(newArr);
console.log(filteredArr);
