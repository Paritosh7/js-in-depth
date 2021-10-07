function fetchData() {
  fetch("/article/promise-chaining/user.json")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));
}

fetchData();
