Array.prototype.myReduce = function myReduce(cb, initialVal) {
  let accumulator = initialVal;
  let counter = 0;
  if (!initialVal) {
    accumulator = this[0];
    counter = 1;
  }
  for (let i = counter; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], this);
  }
  return accumulator;
};

const arr = [1, 2, 3, 4].reduce((acc, curr) => acc + curr);

const val = [1, 2, 3, 4].myReduce((acc, curr) => acc + curr);
console.log(arr);
console.log(val);
