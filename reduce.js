// const arr = [
//   [5, 10, 15, 20],
//   [15, 88, 1, 5, 7],
//   [1, 10, 15, 5, 20],
// ];

// const anotherArr = arr.reduce((acc, curr) => {
//   return curr.filter((ele) => acc.includes(ele));
// });

// console.log(anotherArr);

// function help() {
//   console.log(this);
// }

// help.call({ name: "Paritosh" });

let obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

let array = Array.from(obj);
console.log(array);

for (let item of obj) {
  console.log(item);
}
