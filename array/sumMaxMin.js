function sumMaxMin(A) {
  let min = A[0];
  let max = A[0];

  for (let i = 1; i < A.length; i++) {
    if (min > A[i]) min = A[i];
    if (max < A[i]) max = A[i];
  }
  return max + min;
}

console.log(sumMaxMin([-2, 1, -4, 5, 3]));
