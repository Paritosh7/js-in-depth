/**
 * Count occurrences of a number in a sorted array with duplicates
 */

function binarySearch(arr, ele, firstOccurence) {
  var first = 0;
  var last = arr.length - 1;
  var result = -1;

  while (first <= last) {
    var mid = Math.floor((first + last) / 2);
    if (ele === arr[mid]) {
      result = mid;
      firstOccurence ? (last = mid - 1) : (first = mid + 1);
    } else if (ele < arr[mid]) last = mid - 1;
    else first = mid + 1;
  }
  return result;
}
var arr = [1, 1, 3, 3, 5, 5, 5, 5, 5, 9, 9, 11];
var ele = 1;
var firstOccurence = binarySearch(arr, ele, true);
if (firstOccurence === -1) {
  console.log("number isn't present in the array");
} else {
  var lastOccurence = binarySearch(arr, ele, false);
  console.log(`5 is present ${lastOccurence - firstOccurence + 1} times`);
}
