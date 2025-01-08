/* 
    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

//Data 1
var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95;

//Data 2
var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;

// Function Tinh BMI
function calculateBMI(mass,height) {
    return mass/(height*height);
}

//BMI data 1
var markBMI1 = calculateBMI(massMark1,heightMark1);
var johnBMI1 = calculateBMI(massJohn1,heightJohn1);
var markHigherBMI1 = markBMI1 > johnBMI1;

// Data 2 BMI
var markBMI2 = calculateBMI(massMark2 ,heightMark2);
var johnBMI2 = calculateBMI(massJohn2, heightJohn2);
var markHigherBMI2 = markBMI2 > johnBMI2;

// Output
console.log(`Data 1 - Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}, Mark has higher BMI: ${markHigherBMI1}`);
console.log(`Data 2 - Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}, Mark has higher BMI: ${markHigherBMI2}`);
