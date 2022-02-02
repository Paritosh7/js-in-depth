function User(name, score) {
  this.name = name;
  this.score = score;
}

User.prototype.increaseScore = function () {
  this.score++;
};

function PaidUser(name, score, accountBalance) {
  User.call(this, name, score);
  this.accountBalance = accountBalance;
}

PaidUser.prototype.increaseAccountBalance = function () {
  this.accountBalance++;
};

Object.setPrototypeOf(PaidUser.prototype, User.prototype);

// const user1 = new User("A", 21);
// console.log(user1);
// user1.increaseScore();
// console.log(user1);

const paidUser1 = new PaidUser("b", 21, 200);
console.log(paidUser1);
paidUser1.increaseAccountBalance();
console.log(paidUser1);
paidUser1.increaseScore();
console.log(paidUser1);
