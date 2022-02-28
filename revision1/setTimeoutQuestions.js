// Print 1 to 4, after each second using setTimeout

function print() {
  for (var i = 1; i <= 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

print();
