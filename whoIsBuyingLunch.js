var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];


function whosPaying(names){
 var index = Math.abs(Math.round(Math.random()*(names.length-1)));
 return (names[index] + " is going to buy lunch today!");
}

console.log(whosPaying(names));
