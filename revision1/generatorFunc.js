function* createFlow() {
  let num = 5;
  let newNum = yield num;
  yield 5 + newNum;
}

const generatorObj = createFlow();
console.log(generatorObj);
const element1 = generatorObj.next();
const element2 = generatorObj.next(6);
console.log(element1);
console.log(element2);
