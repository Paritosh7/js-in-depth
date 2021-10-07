function findSingle(arr) {
  // your code here
  var map = new Map();
  arr.forEach((ele) => {
    if (map.has(ele)) {
      var count = map.get(ele);
      map.set(ele, count + 1);
    } else {
      map.set(ele, 1);
    }
  });

  const keys = map.keys();
}

console.log(findSingle([10, 2, 2, 1, 0, 0, 10]));
