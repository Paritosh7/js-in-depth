function mergeSort1(arr, start, end) {
  if (start === end) return [arr[end]];
  var mid = Math.floor((start + end) / 2);

  var left = mergeSort(arr, start, mid);
  var right = mergeSort(arr, mid + 1, end);
  return merge(left, right);
}

function mergeSort2(arr) {
  if (arr.length < 2) return arr;

  var mid = Math.floor(arr.length / 2);

  var left = mergeSort2(arr.slice(0, mid));
  var right = mergeSort2(arr.slice(mid, arr.length));
  return merge(left, right);
}

function merge(left, right) {
  var sortedArr = [];
  var i = 0;
  var j = 0;
  var k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArr[k++] = left[i++];
    } else {
      sortedArr[k++] = right[j++];
    }
  }

  while (i < left.length) {
    sortedArr[k++] = left[i++];
  }
  while (j < right.length) {
    sortedArr[k++] = right[j++];
  }

  return sortedArr;
}
let arr = [90, 110, 50, 1, 4, 77, 89, 35, 0];

console.log(mergeSort2(arr, 0, arr.length - 1));
