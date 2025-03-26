
// let Value = prompt(`Enter a value `);
// console.log(Value , typeof(Value));

// if(isNaN(Value)){
//     console.log('You Enter String', );

// }else{
//     console.log('You Enter Number');

// }


// Task ====== 1 ======

let Numb = Number(prompt(`Enter a Number to check it is Even or Odd`));
(Numb%2==0)?console.log('Number is Even'):console.log('Number is Odd');

// Task ====== 2 ======
let Num1 = Number(prompt(`Enter a First Number`));
let Num2 = Number(prompt(`Enter a Second Number`));
let Num3 = Number(prompt(`Enter a Third Number`));

if(Num1>Num2 && Num1>Num3){
    console.log(`First Number is Greater : ${Num1}`);
}else if (Num2>Num1 && Num2>Num3){
    console.log(`Second Number is Greater : ${Num2}`);
}else{
    console.log(`Third Number is Greater : ${Num3}`);

}

// Task ====== 3 ======

let Check_Num =Number(prompt(`Enter a Number to check it is positive , negative or zero `));
if(Check_Num>0){
    console.log(`Number is Positive`);
} else if(Check_Num<0){
    console.log(`Number is Negative`);
}else{
    console.log(`Number is Zero`);
}

// Task ====== 4 ======
let Marks = Number(prompt(`Enter your Marks`));

if (Marks>=90){
    console.log(`Grade A`);
} else if (Marks>=80 ){
    console.log(`Grade B`);
}else if (Marks>=70){
    console.log(`Grade C`);
}else if (Marks>=60){
console.log(`Grade D`);
}else{
    console.log(`Fail`);
}

// Task ====== 5 ======
let Num = Number(prompt(`Enter a Number `));
if (Num%3==0 && Num%5==0){
    console.log(`Number is Divisible by 3 and 5`);
}else{
    console.log(`Number is not Divisible by 3 and 5`);
}


// Task ====== 6 ======
let UserName = String(prompt(`Enter your Name`));
let Passoward = String(prompt(`Enter your passoward`));

let Predifined_UserName = "atif";
let Predifined_Passoward = "atif123";


if(UserName === Predifined_UserName && Predifined_Passoward ===Passoward ){
    console.log(`Welcome ${UserName}`);
}else{
    console.log(`Invalid User Name or Passoward`);
}