async function randomFunc() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    });
  });

  var result = await promise;
  console.log("Hey!");
}

randomFunc();
