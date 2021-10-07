var promise = Promise.reject(new Error("Whatttt"));

setTimeout(() => {
  promise.catch((err) => console.log(err), 1000);
});

window.addEventListener("unhandledrejection", (eve) => alert(eve.reason));
