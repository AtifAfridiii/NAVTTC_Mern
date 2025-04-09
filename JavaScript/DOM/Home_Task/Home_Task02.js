
//  Access elements using getElementById(),

let idHeading = document.getElementById('idheading');
console.log(idHeading.innerText);


// getElementsByClassName(), and querySelector().
let ulList =  document.getElementsByClassName('ulList');
console.log(ulList[1].innerText);
ulList[1].style.color='red';
///// Now with query selector //////

let liList = document.querySelector('.ulList');
console.log(liList.innerText);
liList.style.color='blue';
liList.innerText ='Changed the li list with query Selector';
liList.style.textDecoration = 'underline'
//  querySelectorAll() // returns a NodeList of all elements that match the specified selectors.


// Change the text content of a paragraph element.
let paragraph = document.querySelector('#idpara');
console.log(paragraph.innerText);
paragraph.innerText='Paragraph text updated';
console.log(paragraph.innerText);

// Change the background color of a div when a button is clicked.
let buttonId = document.querySelector('#btn');
let divId = document.querySelector('#DivID');
buttonId.addEventListener('click', function(){
    divId.style.backgroundColor ='red';
});

// Add a border to an image on mouse hover.

let imgId = document.querySelector('#img')


imgId.addEventListener('mouseenter', () => {
  imgId.style.border = '3px solid black';

});

imgId.addEventListener('mouseleave', () => {
  imgId.style.border = 'none';
});

// {
// Add a click event to a button with the id submitBtn that shows an alert Form submitted!.
// Create a form with two inputs and a submit button. Display the entered values when the button is clicked.
// }
let inputId = document.querySelectorAll('#inputID');
let submitBtn = document.querySelector('#btnSubmit');

submitBtn.addEventListener( 'click',function(event){
  event.preventDefault();
  alert(`First value is : ${inputId[0].value}  Second value is : ${inputId[1].value}`)

});


// Add a mouseover event to a <div> with class hover-box that changes its background color.

let divClass = document.querySelector('.hover-box');

divClass.addEventListener('mouseover', function() {
  divClass.style.backgroundColor = 'blue';
});

divClass.addEventListener('mouseout', function() {
  divClass.style.backgroundColor = '';
});

// Add a dblclick (double click) event to a paragraph to change its text.

let paraChangeId= document.getElementById('paraChange');
paraChangeId.addEventListener('dblclick', function(){
  paraChangeId.innerText='Update paragrahph with double click'
} )

// Add a keyup event to an input field that logs the typed value in the console.
let inputKey = document.querySelector('#inputKey');
inputKey.addEventListener('keyup', function(){
  console.log(inputKey.value);

})

// Add a mouseout event to an image that reduces its opacity.

let imgOp = document.querySelector('.reducOp');
imgOp.addEventListener('mouseout',function(){
  imgOp.style.opacity = '50%'
})


//When a user presses a key inside a text input with id searchBox, display the current value in a <span>.

let userInput = document.querySelector('#searchBox');
let spantText = document.querySelector('.span');
userInput.addEventListener('input',function(){
  spantText.innerText = userInput.value
})

// Add a scroll event to the window that logs "Scrolling..." in the console.

window.addEventListener('scroll',function(){
  console.log('Scrolling');

})


// Add a focus event on an input field that highlights the border.
 let input = document.getElementById('myInput');
 input.addEventListener('focus', function(){
  input.style.border = '2px solid red';
 })

 // Add a blur event to an input that validates if it's empty and shows a warning.
 let inputBlur = document.getElementById('emptyInput');
 inputBlur.addEventListener('blur', function(){
  if(inputBlur.value == ''){
    inputBlur.style.color = 'red';
    inputBlur.innerText = 'Please fill in the field';
    
  }

 })