// [ Algorithm ]
// if year is not divisible by 4 then it is a common year
// else if year is not divisible by 100 then it is a leap year
// else if year is not divisible by 400 then it is a common year
// else it is a leap year
function isLeap(year) {

  if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0)) {
    console.log("Leap year.");
  } else {
    console.log("Not leap year.");
  }

  if ((year % 4 == 0) && (year % 100 != 0)) {
    console.log("Leap year.");
  }
}

isLeap(1989);
