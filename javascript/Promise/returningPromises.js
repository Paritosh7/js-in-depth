return new Promise((resolve) => {
  setTimeout(() => {
    console.log("After 2 seconds");
    resolve(2);
  }, 2000);
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      resolve(result + 1);
    });
  })
  .then((val) => console.log(val));
