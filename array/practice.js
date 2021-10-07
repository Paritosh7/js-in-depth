function slice(str, start, end) {
  return Array.from(str).slice(start, end).join("");
}

let str = "𝒳😂𩷶";

console.log(slice(str, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
console.log(str.slice(1, 3)); // garbage (two pieces from different surrogate pairs)”
let someString = "Hello";
let anotherString = "𝒳😂𩷶";
console.log(someString.slice(1, 3));
console.log(anotherString.slice(1, 3));
