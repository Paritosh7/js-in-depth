// function getData() {
//   console.log("Fetching data .....");
// }

// const doSomething = doDebounceMagic(getData);

// function doDebounceMagic(fn) {
//   var timerId;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn.apply(context, args);
//     }, 300);
//   };
// }

function hey(a, v) {
  console.log(...arguments);
}

hey(1, 2);
