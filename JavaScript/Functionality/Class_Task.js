// let Prime_Number =  Number(prompt('Enter number'));

// if( Prime_Number%2!=0 && Prime_Number%3!=0 ){
//     console.log('It is Prime Number');

// }else{
//     console.log('Not a prime number');

// }


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