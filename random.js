console.log("Script start");
const a = new Promise((resolve, reject) => {
  resolve("Promise resolved");
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

setTimeout(() => {
  console.log("setTimeout");
}, 0);
console.log("Script End");
console.log(a);
