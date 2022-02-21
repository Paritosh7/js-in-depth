const reverseString = function (A) {
  let stack = [];
  for (let i = 0; i < A.length; i++) {
    stack.push(A.charAt(i));
  }

  console.log(stack);
  let string = "";

  while (stack.length) {
    string = string + stack.pop();
  }
  return string;
};

console.log(typeof reverseString("abc"));
