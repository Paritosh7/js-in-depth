function myFlat(arr, depth = 1) {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return [...newArray, ...myFlat(arr[i], depth--)];
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(myFlat([1, 2, [3, 4, 5]], 1));
