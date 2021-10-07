new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      reject("I am rejected");
    });
  })
  .then((res) => {
    console.log("Why am I not being called");
    console.log("I am error", res);
  })
  .catch((err) => {
    console.log(err);
    console.log("Will I ever be called");
    return 1;
  })
  .then((res) => {
    console.log("called after catch");
    console.log(res);
  });
