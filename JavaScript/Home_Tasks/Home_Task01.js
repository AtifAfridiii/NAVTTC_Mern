

// Write a script to print all even numbers from 1 to 10 using a for loop.

for (let index = 1; index <=10; index++) {
   if (index % 2 === 0) {
        console.log(`Even Number : ${index}`);
   }
}


// Write a JavaScript program to check if a number is divisible by 5 using a while loop.

let number = 50 ;
let i =1 ;
while(i<=number){
    if (i%5===0) {
  console.log(`Divisible by 5 : ${i}`);

    }else{
        console.log(`Not Divisible by 5 : ${i}`);
    }
    i++;
}

// Create a program to count the number of digits in a given number using a while loop.
let num = 210003934;
let count = 0;
while (num > 0) {
  num = Math.floor(num / 10);
  count++;

}
console.log(`Number of Digits : ${count}`);


/// Write a program to print numbers from 10 to 1 using a for loop (reverse order).

for (let index = 10; index >=1 ; index-- ) {
   console.log(`Number : ${index}`);

}

// Write a script that asks the user to input numbers until the sum of all entered numbers is greater than 100.

let UserInput;
let sum = 0;
while(sum<=100){
  UserInput = Number(prompt("Enter a number: "));
  sum += UserInput;
  console.log(`Current Sum : ${sum}`);
}
console.log(`Sum of numbers : ${sum}`);


