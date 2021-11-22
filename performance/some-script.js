console.log("hey");

fetch("https://google.com").then(
  (res) => console.log(res),
  (err) => console.log(err)
);
