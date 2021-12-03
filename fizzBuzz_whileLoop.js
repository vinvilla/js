// print numbers from 1 to 100
// multiple of 3, print Fizz instead of the number
// multiple of 5, print buzz instead of the number
// multiple of 3 and 5 , print fizzbuzz

var output = [];
var count = 1;

function fizzBuzz() {


  if (((count % 3) == 0) && ((count % 5) == 0)) {
    output.push("FizzBuzz");
  } else if ((count % 3) == 0) {
    output.push("Fizz");
  } else if ((count % 5) == 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  console.log(output);
  count++;
}

// For loop
// for (let i = 1; i <= 15; i++) {
//   fizzBuzz();
// }

// while Loop - runs 15 times
var i = 1;
while (i <= 15) {
  fizzBuzz();
  i++;
}


// do while Loop - runs 16 times
// var i = 0;
// do {
//   i++;
//   fizzBuzz();
// } while (i <= 15);
