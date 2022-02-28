function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.work = function () {
  console.log("work");
};

// equivalent in class

class ClassUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  work() {
    console.log("work");
  }
}

var user1 = new User("Pari", 2222);
console.log(user1);
var user2 = new ClassUser("jamô", 9090);
console.log(user2);
