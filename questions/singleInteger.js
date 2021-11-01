/** https://bigfrontend.dev/problem/find-the-single-integer */
/** using map */

function findSingleMap(arr) {
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

  let value;
  map.forEach((val, key) => {
    if (val === 1) value = key;
  });
  return value;
}

console.log(typeof findSingleMap([10, 2, 2, 1, 0, 0, 10]));

function findSingleObject(arr) {
  // your code here
  let count = 1;
  let obj = {};
  arr.forEach((ele) => {
    if (obj[ele]) obj[ele] = ++obj[ele];
    else obj[ele] = count;
  });

  const keys = Object.keys(obj);

  let val = null;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === 1) val = parseInt(keys[i]);
  }
  return val;
}

console.log(typeof findSingleObject([10, 2, 2, 1, 0, 0, 10]));
