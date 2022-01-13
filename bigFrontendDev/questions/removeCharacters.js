/**
 * Given a string contaning only a, b and c, remove all b and ac. 
 * removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
 */

function removeChars(input) {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (
      stack.length &&
      input.charAt(i) === "c" &&
      stack[stack.length - 1] === "a"
    ) {
      stack.pop();
    } else if (input.charAt(i) !== "b") {
      stack.push(input.charAt(i));
    }
  }
  return stack.join("");
}

console.log(removeChars("abc"));
