function balancedParanthesis(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else if (character === ")" || character === "]" || character === "}") {
      if (stack.length === 0) return false;
      else if (character === ")" && stack[stack.length - 1] !== "(")
        return false;
      else if (character === "]" && stack[stack.length - 1] !== "[")
        return false;
      else if (character === "}" && stack[stack.length - 1] !== "{")
        return false;
      else stack.pop();
    }
  }
  console.log(stack);
  return stack.length ? false : true;
}

console.log(balancedParanthesis("()"));
