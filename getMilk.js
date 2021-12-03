function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  //var numBottles = Math.floor(money / 1.5);
  //console.log("buy " + numBottles + " bottles of Milk.");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of Milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  //  return money % 1.5;
  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  var numOfBottles = Math.floor(startingMoney / costPerBottle);
  return numOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var returnMoney = startingMoney % costPerBottle;
  return returnMoney;
}

console.log("Hello master, here is your change = " + getMilk(5, 1.5) + " change");
//console.log("Hello master, here is your change = " + getMilk(Math.random()*100, Math.random() * 10) + " change");
