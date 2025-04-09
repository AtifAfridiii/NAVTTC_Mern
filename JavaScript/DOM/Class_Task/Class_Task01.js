let Name = document.querySelector('#name');
let Password = document.querySelector('#password');
let Email = document.querySelector('#email');
let Phone = document.querySelector('#phone');

let TableName = document.querySelector('#tname');
let TableEmail = document.querySelector('#temail');
let TablePassword = document.querySelector('#tpassword');
let TablePhone = document.querySelector('#tphone');

let SignUpbtn = document.querySelector('#btn');


SignUpbtn.disabled = true;


function checkInputs() {
  if (
    Name.value !== '' &&
    Password.value !== '' &&
    Email.value.toLowerCase() !== '' && Email.value.toLowerCase().match('@gmail.com')&&
    Phone.value  !== ''

  ) {
    SignUpbtn.disabled = false;
  } else {
    SignUpbtn.disabled = true;

  }
}


[Name, Password, Email, Phone].forEach(input => {
  input.addEventListener('input', checkInputs);
});

SignUpbtn.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    Name.value !== '' &&
    Password.value !== '' &&
    Email.value !== '' &&
    Phone.value !== ''
  ) {
    TableName.innerHTML = Name.value;
    TableEmail.innerHTML = Email.value;
    TablePassword.innerHTML = Password.value;
    TablePhone.innerHTML = Phone.value;
  } else {
    alert('Please fill all the fields');
  }
});
