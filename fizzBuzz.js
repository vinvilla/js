// print numbers from 1 to 100
// multiple of 3, print Fizz instead of the number
// multiple of 5, print buzz instead of the number
// multiple of 3 and 5 , print fizzbuzz

for (let i = 1; i <= 100; i++) {
  if (((i % 3) == 0) && ((i % 5) == 0)) {
    console.log("FizzBuzz");
  }
  if (((i % 3) == 0) && ((i % 5) != 0)) {
    console.log("Fizz");
  }
  if (((i % 3) != 0) && ((i % 5) == 0)) {
    console.log("Buzz");
  }
  if (((i % 3) != 0) && ((i % 5) != 0)) {
    console.log(i);
  }
}

console.log("------------- Second Method ----------------");
var output = [];
var count = 1;

function fizzBuzz() {


  if (((count % 3) == 0) && ((count % 5) == 0)) {
    output.push("FizzBuzz");
  }
  else if ((count % 3) == 0) {
    output.push("Fizz");
  }
  else if ((count % 5) == 0) {
    output.push("Buzz");
  }
  else {
    output.push(count);
  }


  // if (((count % 3) == 0) && ((count % 5) == 0)) {
  //   output.push("FizzBuzz");
  // }
  // if (((count % 3) == 0) && ((count % 5) != 0)) {
  //   output.push("Fizz");
  // }
  // if (((count % 3) != 0) && ((count % 5) == 0)) {
  //   output.push("Buzz");
  // }
  // if (((count % 3) != 0) && ((count % 5) != 0)) {
  //   output.push(count);
  // }

  console.log(output);
  count++;
}

for (let i = 1; i <= 15; i++) {
  fizzBuzz();
}
