const obj = {
  from: 5,
  to: 10,
};

obj[Symbol.iterator] = function () {
  let start = this.from;
  let end = this.to;
  return {
    next: function () {
      if (start < end) {
        return { value: start++, done: false };
      } else {
        return { done: true };
      }
    },
  };
};

for (let ele of obj) {
  console.log(ele);
}
