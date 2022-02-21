function myFlat(arr, depth = 1) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      newArr.push(...myFlat(arr[i], depth - 1));
    } else newArr.push(arr[i]);
  }
  return newArr;
}

// const arr = [1, 2, 3, [4, 5], [6], [[[7, 8, 9]]]];

// console.log(myFlat(arr, 3));

let arr = [
  [1, 2],
  [3, 4],
];

const flattenedArr = [].concat(...arr);
console.log(flattenedArr);
