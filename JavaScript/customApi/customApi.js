
let Button = document.querySelector('#btn');
let Name = document.querySelector('#signUpName');
let Email = document.querySelector('#signUpEmail');

let Passoward = document.querySelector('#signUpPassword');
let CondirmPassoward = document.querySelector('#confirmPassword');

let Adress = document.querySelector('#adress');

let postAdress = document.querySelector('#Postadress');
let PhoneNumber = document.querySelector('#signUpPhone');

let Gender1 = document.querySelector('#male');
let Gender2 = document.querySelector('#female');

Button.addEventListener('click',(e)=>{
    e.preventDefault();

    if (Name.value.trim() === "") {
       let GetRequired = document.querySelector('#nameRequired');
        GetRequired.innerText= 'Name is required';
    }

    

})