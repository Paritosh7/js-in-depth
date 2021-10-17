let strings = ["aba", "baba", "aba", "xzxb"];
let queries = ["aba", "xzxb", "ab"];

const arr = queries.map((query) => {
  return strings.reduce((count, currVal) => {
    if (query === currVal) return ++count;
    else return count;
  }, 0);
});

console.log(arr);
