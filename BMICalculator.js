// BMI = weight (kg) / height^2 (m^2)
// create a function that takes the height and weight as input and returns BMI

function bmiCalculator(weight, height){
  var bmi = (weight / Math.pow(height,2));
  return Math.round(bmi);
}

var bmi = bmiCalculator(60, 2);
if (bmi < 18.5) {
  console.log("Your BMI is "+ bmi + ", so you are underweight.");
}
if (bmi >= 18.5 && bmi <=24.9) {
  console.log("Your BMI is "+ bmi + ", so you have a normal weight.");
}
if (bmi > 24.9) {
  console.log("Your BMI is "+ bmi + ", so you are overweight.");
}
