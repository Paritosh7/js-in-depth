function binarySearch(arr, ele) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === ele) return mid;
    else if (ele <= arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

console.log(binarySearch([10, 40, 60, 70, 110, 200, 290, 1000, 7890], 40));
