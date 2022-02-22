function pipe(funcs) {
  return function (args) {
    return funcs.reduce((acc, curr) => curr(acc), args);
  };
}
