
 // Write a function to calculate the square of a number.

function  Number_Square(number){

    return number * number;
}

console.log(`Square of number : ${Number_Square(5)}`);

//Write a function that takes two numbers as input and returns their product.

function Product_of_Two_Numbers(){
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    let product = num1 * num2;
   return product;
}
console.log(`Product of two numbers : ${Product_of_Two_Numbers()}`);




// Declare an array of colors. Add a new color to the end and remove the first color.

const Colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
console.log(`Colors : ${Colors}`);

Colors.push("Black")
console.log(`Colors : new color added to end ${Colors}`);

Colors.shift("Red")
console.log(`Colors :first color removed  ${Colors}`);


// Create an array of numbers and find the sum of all numbers using a loop.

const Numbers = [5, 5, 10, 10, 20];
let Sum = 0;

for (let index = 0; index < Numbers.length; index++) {
    Sum += Numbers[index];
    console.log(`Current Sum : ${Sum} at index ${index}`);
}
console.log(`Sum of Numbers : ${Sum}`);


// Create an object car with properties make, model, and year. Print each property.

const Car = {
    name: "BMW",
    model: "X5",
    year: 2020,
    color: "Black",

};
console.log(`Car Name : ${Car.name}`);
console.log(`Car Model : ${Car.model}`);
console.log(`Car Year : ${Car.year}`);
console.log(`Car Color : ${Car.color}`);

// Write a function isEven() that checks if a number is even or odd.

const isEven = (number) => {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
console.log(`Number is : ${isEven(4)}`);

// Create an array of student names. Use a loop to print each name.

const Student = ['Ali', 'Ahmed', 'Sara', 'Aisha', 'Hassan'];
for (let index = 0; index < Student.length; index++) {
    console.log(`Student Name : ${Student[index]}`);

}

// Write a function that takes an array of numbers and returns the largest number.

function Largest_Number(array){
      let largest = array[0];
      for (let index = 0; index < array.length; index++) {
        if (array[index] > largest) {
            largest = array[index];
        }

      }
        return largest;
}
const NumbersArray = [5, 10, 20, 100, 40, 50];
console.log(`Largest Number : ${Largest_Number(NumbersArray)}`);


// Create an object person with properties firstName and lastName. Write a function to display the full name.

const Person = {
  First_Name: "John",
  Last_Name: "Doe",

}
const Full_Name = (Person) => {
  return `${Person.First_Name} ${Person.Last_Name}`;
}
console.log(`Full Name : ${Full_Name(Person)}`);


// Write a program to reverse the elements of an array without using any built-in methods.

const Person1 = ['Ali',20,'Karachi', 'Pakistan',true];
let Person2 = [];
for (let index = Person1.length-1; index >=0 ; index--) {
    Person2.push(Person1[index]);
    console.log(`Person1 : ${Person1[index]} at index ${index}`);
}
console.log(`Person2 : ${Person2}`);



