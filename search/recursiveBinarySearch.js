function binarySearch(arr, left, right, ele) {
  if (left > right) return -1;

  var mid = Math.floor(left + (right - left) / 2);

  if (ele === arr[mid]) return mid;
  else if (ele < arr[mid]) return binarySearch(arr, left, mid - 1, ele);
  else return binarySearch(arr, mid + 1, right, ele);
}
const arr = [10, 40, 60, 70, 110, 200, 290, 1000, 7890];
console.log(binarySearch(arr, 0, arr.length - 1, 60));
