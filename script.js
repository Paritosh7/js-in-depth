const obj = {
  from: 1,
  to: 5,
};

const anotherObj = {
  0: "hey",
  1: "you",
  length: 2,
  wahh: 33,
};

const anotherObjArr = Array.from(anotherObj);
console.log(anotherObjArr);

obj[Symbol.iterator] = function () {
  var start = this.from;
  var end = this.to;
  return {
    next: () => {
      if (start <= end) {
        return { done: false, value: start++ };
      } else return { done: true };
    },
  };
};

for (let ele of obj) {
  console.log(ele);
}

const arr = [...obj];
console.log(arr);
