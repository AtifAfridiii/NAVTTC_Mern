let Name = document.querySelector('#name');
let Password = document.querySelector('#password');
let Email = document.querySelector('#email');
let Phone = document.querySelector('#phone');

let TableName = document.querySelector('#tname');
let TableEmail = document.querySelector('#temail');
let TablePassword = document.querySelector('#tpassword');
let TablePhone = document.querySelector('#tphone');

let SignUpbtn = document.querySelector('#btn');

SignUpbtn.addEventListener('click', function (event) {
  event.preventDefault();
  TableName.innerHTML = Name.value;
  TableEmail.innerHTML = Email.value;
  TablePassword.innerHTML = Password.value;
  TablePhone.innerHTML = Phone.value;
});
