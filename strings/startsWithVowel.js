const startsWithVowel = function (A) {
  let count = 0;
  let str = A.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str.charAt(i))) count++;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (
        str.charAt(i) === "a" ||
        str.charAt(i) === "e" ||
        str.charAt(i) === "i" ||
        str.charAt(i) === "i" ||
        str.charAt(i) === "o" ||
        str.charAt(i) === "u"
      ) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(startsWithVowel("ABEC"));
