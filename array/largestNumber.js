function largestNumber(arr) {
  const stringArr = arr.map((ele) => ele + "");
  const ans = stringArr
    .sort((a, b) => parseInt(b + a) - parseInt(a + b))
    .reduce((a, b) => a + b);
  return ans;
}

console.log(largestNumber([3, 30, 34, 5, 9]));
