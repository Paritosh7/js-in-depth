function user(name, score) {
  const obj = Object.create(userFunctionalities);
  obj.name = name;
  obj.score = score;
  return obj;
}

const userFunctionalities = {
  increaseScore: function () {
    this.score++;
  },
};

const pari = user("paritosh", 9);
pari.increaseScore();
console.log(pari.score);

function paidUser(name, score, accountBalance) {
  const obj = user(name, score);
  obj.accountBalance = accountBalance;
  Object.setPrototypeOf(obj, paidUserFunctionalities);
  return obj;
}

const paidUserFunctionalities = {
  increaseAccountBalance: function () {
    this.accountBalance++;
  },
};

Object.setPrototypeOf(paidUserFunctionalities, userFunctionalities);
const paidUser1 = paidUser("You", 8, 1000);
paidUser1.increaseScore();
console.log(paidUser1.score);
