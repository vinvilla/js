function bmiCalculator(weight, height){
  var bmi = Math.round(weight / Math.pow(height,2));
  var interpretation;
//var bmi = bmiCalculator(60, 2);

if (bmi < 18.5) {
  interpretation = "Your BMI is "+ bmi + ", so you are underweight.";
}
if (bmi >= 18.5 && bmi <=24.9) {
  interpretation ="Your BMI is "+ bmi + ", so you have a normal weight.";
}
if (bmi > 24.9) {
  interpretation = "Your BMI is "+ bmi + ", so you are overweight.";
}

  return interpretation;
}

console.log(bmiCalculator(60, 2));
