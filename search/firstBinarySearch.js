function firstBinarySearch(arr, ele) {
  var low = 0;
  var high = arr.length - 1;
  var result = -1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);

    if (ele === arr[mid]) {
      result = mid;
      high = mid - 1;
    } else if (ele < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return result;
}

console.log(firstBinarySearch([2, 4, 10, 10, 10, 18, 20], 10));
