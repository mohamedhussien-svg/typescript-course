"use strict";
let number1;
number1 = 2;
const number2 = 5.2;
const showResult = true;
let message = 'The Result is :';
add(number1, number2, showResult, message);
function add(num1, num2, printResult, message) {
    const result = num1 + num2;
    if (printResult) {
        console.log(message + result);
    }
    return result;
}
