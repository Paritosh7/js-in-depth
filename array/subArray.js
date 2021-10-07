/** The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

“If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:”*/

function subArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let partialSum = arr[i];
    for (let j = 1; j < arr.length; j++) {
      partialSum += arr[j];
      if (partialSum > sum) sum = partialSum;
    }
  }
  return sum;
}

const arr = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23];
const arr2 = [3, -2, 5, -1];
console.log(subArray(arr2));
