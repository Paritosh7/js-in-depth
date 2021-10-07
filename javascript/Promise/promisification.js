// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

function loadScript(src, callback) {
  setTimeout(() => {
    console.log("fetching data...");
    if (src) callback(null, src);
    else callback(new Error("Couldn't fetch"));
  }, 3000);
}

function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(error, ...results) {
        if (error) reject(error);
        else resolve(manyArgs ? results : results[0]);
      }
      args.push(callback);
      f.call(this, ...args);
    });
  };
}

promisify(loadScript)("abc")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
