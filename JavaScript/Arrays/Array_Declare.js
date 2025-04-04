
const Cars = ["BMW", "Mercedes", "Toyota", "Honda", "Ford"];
console.log(Cars);

Cars.push("Chevrolet");
console.log(Cars);

Cars.pop();
console.log(Cars);

Cars.unshift("Audi");
console.log(Cars);

Cars.shift();
console.log(Cars);

for (let index = 0; index < Cars.length; index++) {
    const element = Cars[index];
    console.log(element);

}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(numbers.toString());

const number2 = [1, 2, 3, 4, 5,6,7,8,9,10];
console.log(number2);
console.log(number2.join('-'));

const number3 = [1,2,3 ,[4,5,6,] , [7,8,9] , 10 ]
console.log(number3);


console.log(number3.flat());


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.splice(2,0,   "Lemon", "Kiwi");
console.log(fruits);

for (let index = 1; index <=10 ; index++) {
    console.log(`2 x ${index} = ${2*index}`);

}

let hello = 'hello world how are you doing?';
console.log(hello);

console.log(hello.split(' '));




