const readlineSync = require('readline-sync');
// var readlineSync = require('readline-sync');

// var name = readlineSync.question('May I have your name? ');
// console.log('Hi ' + name + ' ! ');

var num1 = readlineSync.question('Please enter your first number: ');
var num2 = readlineSync.question('Please enter your second number: ');
var chosenOperator = readlineSync.question('Please enter your chosen operation(add, sub, mul, div): ');

//add
function addTwoNumbers(num1, num2){
    return num1 + num2;
}

//sub
function subTwoNumbers(num1, num2){
    return num1 - num2;
}

//multiply
function mulTwoNumbers(num1, num2){
    return num1 * num2;
}

//divide
function divTwoNumbers(num1, num2){
    return num1 / num2;
}

//function definitions of add, sub, multiply, divide
function nodeCalculator(num1, num2, chosenOperator){
    if (chosenOperator == 'add'){
        console.log('The answer is ' + addTwoNumbers(num1, num2));
        }
    else if (chosenOperator == 'sub'){
        console.log('The answer is ' + subTwoNumbers(num1, num2));
    } 
    else if (chosenOperator == 'mul'){
        console.log('The answer is ' + mulTwoNumbers(num1, num2));
    }  
    else if (chosenOperator == 'div'){
        console.log('The answer is ' + divTwoNumbers(num1, num2));
    }
}
nodeCalculator(num1, num2, chosenOperator);