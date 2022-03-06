var cache = {};

function addTwo(num) {
  if (cache[num]) {
    console.log("caching!");
    return cache[num];
  }
  cache[num] = num + 2;
  console.log("new");
  return cache[num];
}

addTwo(2);
addTwo(2);
addTwo(4);
addTwo(3);
addTwo(2);

/** Caching Objects */

var users = {};

function User(name) {
  this.name = name;
}

function getUser(name) {
  if (!users[name]) {
    let user = new User(name);
    users[name] = user;
    return user;
  }
  return users[name];
}

var user1 = getUser("sam");
var user2 = getUser("sam");
var user3 = getUser("sam");
var user4 = getUser("sam");

console.log(user1 === user2);
