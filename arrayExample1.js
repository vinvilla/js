var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

console.log("What is your name?");


console.log(guestList);

if (guestList.includes("James")) {
  console.log("Welcome!");
} else {
  console.log("Sorry, maybe nexttime");
}

var newName = "Tanya";

guestList.push(newName);
console.log(guestList);

guestList.pop(newName);
console.log(guestList);

for (let i in guestList) {
   console.log(guestList[i]);
}
