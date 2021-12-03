var boysName = "Alexander";
var girlsName = "Samantha";

for (let i = 0; i < 1; i++) {
var n = Math.random();   //(0 to .9999999999 16 digit number)
var diceNum = Math.floor(n * 100) + 1;

if (diceNum > 70) {
  console.log("Congratulations.. you guys are compatible. You score is " + diceNum);
}
if (diceNum > 30 && diceNum <= 70) {
console.log("meh.. you guys aren't not super compatible. You score is " + diceNum);
}
if (diceNum <= 30)
{
  console.log("Yikes.. you guys aren't compatible. You score is " + diceNum);
}
}

// === (checks for datatype)   !==    ==  (doesn't check data type)
// && AND , || OR , ! // NOT
