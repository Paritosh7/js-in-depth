let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
    console.log(i % 1e6 === 0);
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + "ms");
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}

document.getElementById("btn").addEventListener("click", count);
