

let Num1 = Number(prompt('Enter First number'));
let Num2 = Number(prompt('Enter Second number'));
let Operator = String(prompt('Oprator'));

switch (Operator) {
    case '+':
        console.log(`Addition of ${Num1} and ${Num2} is ${Num1 + Num2}`);
        break;
    case '-':
        console.log(`Substraction of ${Num1} and ${Num2} is ${Num1 - Num2}`);
        break;
    case '/':
        console.log(`Division of ${Num1} and ${Num2} is ${Num1 / Num2}`);
        break;
    case 'x':
        console.log(`Multiplication of ${Num1} and ${Num2} is ${Num1 * Num2}`);
        break;
    default:
        console.log('Invalid Oprator');
        break;
}
