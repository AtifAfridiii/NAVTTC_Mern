// Functions

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log('Random Number between 1 and 10: ' + getRandomInt(1, 10));



// Function with default parameters

function greet(name = 'World') {
    return `Hello, ${name}!`;
}
console.log(greet());

console.log(greet('Alice'));



// arrow function

const getRandomIntArrow = (min, max) => Math.floor(Math.random() * (max - min)) + min;
console.log('Random Number between 30 and 40: ' + getRandomIntArrow(30, 40));