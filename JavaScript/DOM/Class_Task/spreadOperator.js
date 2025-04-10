

// spread operator
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = [...numbers, 6, 7, 8];
console.log(doubleNumbers);

// rest Operator

const arry = [1,2,3,4,5,6,6,7];
const [first, second , ...rest] = arry;
console.log(first,second,rest);

console.log(arry);
const unique = [...new Set(arry)];
console.log(unique);


function Names(...name){
    console.log(name);
}
Names('joe','doe')

