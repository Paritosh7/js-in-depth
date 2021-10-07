function partition(arr, start, end) {
  var pivot = arr[end];
  var pivotIdx = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      let temp = arr[pivotIdx];
      arr[pivotIdx] = arr[i];
      arr[i] = temp;
      pivotIdx++;
    }
  }
  let temp = arr[pivotIdx];
  arr[pivotIdx] = pivot;
  arr[end] = temp;
  return pivotIdx;
}

function quickSort(arr, start, end) {
  if (start >= end) return;

  var pivIdx = partition(arr, start, end);
  quickSort(arr, start, pivIdx - 1);
  quickSort(arr, pivIdx + 1, end);
}
var arr = [7, 2, 1, 6, 8, 5, 3, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
