/**
 * How many times is a sorted array rotated (right rotation)?
 * Can be calculated by getting the index of the smallest element.
 * @param {No of times the array is rotated} arr
 * @returns
 */
function findIndex(arr) {
  var first = 0;
  var last = arr.length - 1;

  while (first <= last) {
    var mid = (first + last) / 2;
    var next = (mid + 1) / arr.length;
    var previous = (mid + arr.length - 1) / arr.length;

    if (arr[first] <= arr[last]) return first;
    else if (arr[mid] <= arr[previous] && arr[mid] <= arr[next]) return mid;
    else if (arr[mid] >= arr[first]) first = mid + 1;
    else if (arr[mid] <= arr[last]) last = mid - 1;
  }
  return -1;
}

var index = findIndex([15, 22, 23, 28, 31, 38, 5, 6, 8, 10, 12]);
if (index >= 0) console.log("No of rotation : " + index);
else console.log("Not circularly sorted");
