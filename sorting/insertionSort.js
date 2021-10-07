function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let hole = i;
    let value = arr[i];

    while (hole > 0 && arr[hole - 1] > value) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = value;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
