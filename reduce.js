function hello() {
  const a = [1, 2, 4];
  return function you() {
    return function there() {
      return function pari() {
        return a;
      };
    };
  };
}

console.log(hello()()()());
