const delay = function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("What delay error!"), ms);
  });
};

const anotherDelay = function anotherDelay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, ms);
  });
};

delay(3000)
  .then((res) => console.log(res))
  .catch((err) => alert(err));
anotherDelay(3000)
  .then((res) => console.log(res))
  .catch((err) => alert(err));
