const maxset = function (A) {
  let obj = {
    arr: [],
    max: -Infinity,
  };

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) continue;
    for (let j = i + 1; j <= A.length; j++) {
      if (A[j - 1] < 0) break;
      else {
        let subArr = A.slice(i, j);
        let sum = subArr.reduce((a, b) => a + b);
        if (sum > obj.max) {
          obj.max = sum;
          obj.arr = subArr;
        }
        if (sum === obj.max && subArr.length > obj.arr.length) {
          obj.arr = subArr;
        }
        if (sum === obj.max && subArr.length === obj.arr.length) {
          if (obj.i < i) break;
          else {
            obj.arr = subArr;
            obj.i = i;
          }
        }
      }
    }
  }
  return obj.arr;
};

console.log(maxset([0, 0, -1, 0]));
