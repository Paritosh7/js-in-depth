Array.prototype.myForEach = function myForEach(cb, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    cb.call(thisArg, arr[i], i, arr);
  }
};

[2, 3, 4, 5].myForEach((e) => {
  console.log(e);
});
