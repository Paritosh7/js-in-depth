function Dog(name) {
  this.name = name;
}

const dogs = {};
function getDog(name) {
  if (dogs[name] === undefined) {
    dogs[name] = new Dog(name);
  }
  return dogs[name];
}

const dog1 = getDog("sam");
const dog2 = getDog("sam");
console.log(dog1 === dog2); // true
