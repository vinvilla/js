function lyricTemplate(i) {
// console.log(i)
  if (i > 2) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    console.log("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    console.log("");
  }

  if (i === 2) {
    console.log("2 bottle of beer on the wall, 2 bottles of beer.");
    console.log("Take one down and pass it around, 1 bottle of beer on the wall.");
    console.log("");
  }

  if (i === 1) {
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("");
  }

  if (i === 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    console.log("");
  }
}

var i = 99;

while (i >= 0) {
  lyricTemplate(i);
  i--;
}
