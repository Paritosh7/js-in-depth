const spiralOrder = function (A) {
  var firstRow = 0;
  var firstCol = 0;
  var lastRow = A.length - 1;
  var lastCol = A[0].length - 1;
  var returnArr = [];
  var count = 0;
  var nEl = A.length * A[0].length;

  while (count < nEl) {
    for (let i = firstCol; i <= lastCol && count < nEl; i++) {
      returnArr.push(A[firstRow][i]);
      count++;
    }
    firstRow++;

    for (let i = firstRow; i <= lastRow && count < nEl; i++) {
      returnArr.push(A[i][lastCol]);
      count++;
    }
    lastCol--;

    for (let i = lastCol; i >= firstCol && count < nEl; i--) {
      returnArr.push(A[lastRow][i]);
      count++;
    }
    lastRow--;

    for (let i = lastRow; i >= firstRow && count < nEl; i--) {
      returnArr.push(A[i][firstCol]);
      count++;
    }
    firstCol++;
  }
  return returnArr;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

let a = {
  a: 90,
  b: 90,
};

console.log(a.a);
