function isPallindrome(A) {
  let str = A.toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (
      (str.charAt(i) >= "a" &&
        str.charAt(i) <= "z" &&
        str.charAt(j) >= "a" &&
        str.charAt(j) <= "z") ||
      (str.charCodeAt(i) >= 48 &&
        str.charCodeAt(i) <= 57 &&
        str.charCodeAt(j) >= 48 &&
        str.charCodeAt(j) <= 57)
    ) {
      if (str.charAt(i++) != str.charAt(j--)) return 0;
    } else if (!(str.charAt(i) >= "a" && str.charAt(i) <= "z")) i++;
    else if (!(str.charAt(j) >= "a" && str.charAt(j) <= "z")) j--;
  }
  return 1;
}

console.log(isPallindrome("1a2"));
