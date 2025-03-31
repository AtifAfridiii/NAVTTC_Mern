let Prime_Number =  Number(prompt('Enter number'));

if(Prime_Number<2){
console.log('Not a prime number less than 2');

}else if( Prime_Number%2!=0){
    console.log('It is Prime Number');

}else{
    console.log('Not a prime number');

}


let Name = prompt('Enter your Name');
let Passoward = prompt('Enter passoward')

if (Name.toLowerCase()=='guest' && Passoward.toLocaleLowerCase()=='guest123'){
    console.log('Guest account ');
}else if( Name.toLowerCase() =='admin' && Passoward.toLowerCase() =='admin123'){
    console.log('Welcome Admin');
}else if (Name.toLowerCase() =='user' && Passoward.toLowerCase() =='user123'){
    console.log('Welcome User');
}else{
    console.log('Invalid');

}

let Check_Number = Number(prompt("Enter any number "));
(Check_Number >= 10 && Check_Number <= 50) ? console.log(`The Number ${Check_Number} is in the range of 10-50`) : console.log('Not in range');

let Alphabetic_Character = String(prompt('Enter any  single character'));
if (Alphabetic_Character.length == 1 && Alphabetic_Character.toLocaleLowerCase() === 'a' || Alphabetic_Character.toLocaleLowerCase() === 'e' || Alphabetic_Character.toLocaleLowerCase() === 'i' || Alphabetic_Character.toLocaleLowerCase() === 'o' || Alphabetic_Character.toLocaleLowerCase() === 'u'){
    console.log('Vowel');
}else{
    console.log('Consonant');
}