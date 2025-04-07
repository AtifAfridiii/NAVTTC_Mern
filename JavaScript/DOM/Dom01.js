// let Body = document.body
// Body.style.backgroundColor='red'
// console.log(Body);

// console.log(document.getElementById('Heading1').innerText);

// document.getElementById('Heading1')

document.getElementById('Heading1').innerText='Hello World';

document.getElementById('Box').style.backgroundColor='red';


function onClick(){
    let user = document.getElementById('user')
    alert(`Value is : ${user.value}`);
}


let mern = document.getElementsByClassName("mern")
for (let index = 0; index < mern.length ; index++) {

   mern[index].style.fontSize='20px';
   mern[index].style.color='blue'

   console.log(mern[index].innerText );

}

let newADD = document.getElementsByClassName("Note");
newADD.className='Highlight';
console.log(newADD[0].className);

// newADD[0].classList.add('Highlight');
// console.log(newADD[0].classList);

// console.log(newADD[0].classList.contains('Highlight'));
// let new2= document.getElementsByClassName('Highlight')
// new2[0].style.backgroundColor='yellow'


let List = document.getElementsByTagName('li')
console.log(List.length);

for (let index = 0; index < List.length; index++) {
   console.log(` ${index} : ${List[index].innerText}`);


}