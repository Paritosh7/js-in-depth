const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const val = [repeatThreeTimes, embolden].reduce((prev, pres) => {
  return pres(prev);
});

console.log(val);
