let number1: number;
number1 = 2;
const number2 = 5.2;
const showResult = true;
let message = 'The Result is :';
add(number1, number2, showResult, message);


function add(num1: number, num2: number, printResult: boolean, message: string) {
    const result = num1 + num2;
    if (printResult) {
        console.log(message + result)
    }
    return result;
}
