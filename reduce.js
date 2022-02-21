const arr = [
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20],
];

const anotherArr = arr.reduce((acc, curr) => {
  return curr.filter((ele) => acc.includes(ele));
});

console.log(anotherArr);

function help() {
  console.log(this);
}

help.call({ name: "Paritosh" });
