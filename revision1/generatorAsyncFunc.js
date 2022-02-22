function getJsonData(data) {
  generatorObj.next(data);
}

function doWhenDataReceived(response) {
  const jsonYield = generatorObj.next(response);

  jsonYield.value.then(getJsonData);
}

function doWhenErrorReceived(err) {
  if (err) console.log("There was an error", err);
}

function* asyncGenerator() {
  const response = yield fetch("https://restcountries.com/v3.1/all");
  if (response.ok) {
    const data = yield response.json();
    console.log(data);
  } else console.log(response);
}

const generatorObj = asyncGenerator();
const promise = generatorObj.next();
console.log(promise);
promise.value.then(doWhenDataReceived).catch(doWhenErrorReceived);
