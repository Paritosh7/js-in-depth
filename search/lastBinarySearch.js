function lastbinarySearch(arr, ele) {
  var first = 0;
  var last = arr.length - 1;
  var result = -1;

  while (first <= last) {
    var mid = Math.floor((first + last) / 2);

    if (ele === arr[mid]) {
      result = mid;
      first = mid + 1;
    } else if (ele < mid) last = mid - 1;
    else first = mid + 1;
  }
  return result;
}

console.log(lastbinarySearch([2, 4, 10, 10, 10, 18, 20], 10));
