function MyPromise(cb) {
  this.state = "pending";
  this.result = undefined;
  this.then = (fulfilledCallback, rejectCallback) => {
    if (this.state === "fulfilled") {
      const newResult = fulfilledCallback(this.result);
    } else {
      const newRejectResult = rejectCallback(this.result);
    }
    return this;
  };
  const resolve = (value) => {
    this.state = "fulfilled";
    this.result = value;
  };

  const reject = (error) => {
    this.state = "rejected";
    this.result = error;
  };
  cb(resolve, reject);
}

var myPromise = new MyPromise((resolve, reject) => {
  resolve(1);
});

// myPromise
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   });

myPromise.then((result) => {
  console.log(result);
  return result * 2;
});
