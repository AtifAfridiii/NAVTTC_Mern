
let Name = prompt(`Enter your name `);

console.log(`Your name is : ${Name}`);
console.log(`Type is ${typeof Name}`);

let Changed = Number(Name);

console.log(`Type change to number : ${Changed }`);
console.log(`Type is ${typeof Changed}`);

console.log(`Multiply with 2 x ${Changed} = ${2*Changed} `);

console.log(`Data Type of 2 and ${Changed} is : ${ typeof Changed == typeof 2 }`);


let a = 2  ;
console.log(`A value is : ${a}`);

let b = Changed ;
console.log(`B value is : ${b}`);

//  ============ First Method  Swapping values ============
// let temp = a ;
// a=Changed ;
// b=temp
// console.log(`Values are swapped A : ${a} and value of B : ${b}`);


//  ============ Second Method  Swapping values ============

b=b-a ;
a=a+b ;
b=a-b ;

console.log(`Values are swapped A : ${a} and value of B : ${b}`);

console.log(true&&false);

console.log(true||false);


let $name = 'Rahul';
console.log(`Name is : ${$name}`);






