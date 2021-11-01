class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }

  increment() {
    this.score++;
  }
}

class PaidUser extends User {}
