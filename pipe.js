const multiplyBy2 = (x) => x * 2;
const add3 = (x) => x + 3;
const divideBy5 = (x) => x / 5;

const compose = function (funcs) {
  return (initialVal) => {
    return funcs.reduce((acc, curr) => {
      acc = curr(acc);
      return acc;
    }, initialVal);
  };
};

const run = compose([multiplyBy2, add3, divideBy5]);
const result = run(11);
console.log(result);
