/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

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

function compareBMI(markBMI, johnBMI, dataset) {
    if (markBMI > johnBMI) {
        console.log(`Dataset ${dataset}: Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
    } else if (johnBMI > markBMI) {
        console.log(`Dataset ${dataset}: John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
    } else {
        console.log(`Dataset ${dataset}: Mark and John have the same BMI (${markBMI.toFixed(2)})!`);
    }
}

// Data 1
let markBMI1 = calculateBMI(massMark1, heightMark1);
let johnBMI1 = calculateBMI(massJohn1, heightJohn1);
compareBMI(markBMI1, johnBMI1, 1);

// Data 2
let markBMI2 = calculateBMI(massMark2, heightMark2);
let johnBMI2 = calculateBMI(massJohn2, heightJohn2);
compareBMI(markBMI2, johnBMI2, 2);