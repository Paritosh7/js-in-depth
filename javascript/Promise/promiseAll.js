const apis = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

const requests = apis.map((api) => fetch(api));

Promise.all(requests)
  .then((responseArr) => {
    const responseJson = responseArr.map((response) => response.json());
    return Promise.all(responseJson);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
