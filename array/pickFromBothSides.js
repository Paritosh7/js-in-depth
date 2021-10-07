/**
 * Pick from both sides!
 * https://www.interviewbit.com/problems/pick-from-both-sides/
 */

const solve = function (arr, k) {
  var startSum = 0;
  for (let i = 0; i < k; i++) {
    startSum += arr[i];
  }
  var sum = startSum;

  var endSum = 0;
  for (let i = 0; i < k; i++) {
    startSum = startSum - arr[k - i - 1];
    endSum = endSum + arr[arr.length - 1 - i];
    var partialSum = startSum + endSum;
    sum = Math.max(partialSum, sum);
  }
  return sum;
};

let arr = [5, -2, 3, 1, 2];
let k = 3;
console.log(solve(arr, k));
