function thunk() {
  const returnedPromise = asyncAction()("started fetching");
  console.log("thunk", returnedPromise);
  returnedPromise
    .then((res) => {
      console.log("thunk then: ", res);
    })
    .catch((err) => console.log(err));
  console.log("Then is going to be called later. ");
}

function asyncAction() {
  return function (start) {
    console.log("start: ", start);
    return fetch(
      "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
    );
    // ).then((res) => console.log("then: ", res));
  };
}

thunk();
