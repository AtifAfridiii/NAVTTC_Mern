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

document.getElementsByClassName('Note')[0].className = 'highlight';
document.getElementsByClassName('highlight')[0].style.backgroundColor='yellow';

// document.getElementById('note1').className = 'highlight';

// newADD[0].classList.add('Highlight');


// console.log(newADD[0].classList.contains('Highlight'));
// let new2= document.getElementsByClassName('Highlight')
// new2[0].style.backgroundColor='yellow'


let List = document.getElementsByTagName('li')
console.log(List.length);

for (let index = 0; index < List.length; index++) {
   console.log(` ${index} : ${List[index].innerText}`);


}

let First_Heading = document.getElementById('heading')
console.log(First_Heading.innerText);
First_Heading.style.backgroundColor='teal'


// document.getElementsByTagName('div')[0].innerText = 'Hello World in div 1';
// document.getElementsByTagName('div')[1].innerText = 'Hello World in div 2';
// document.getElementsByTagName('div')[2].innerText = 'Hello World in div 3';

let Div_Tags = document.getElementsByTagName('div')


for (let index = 0; index < Div_Tags.length; index++) {
   if(Div_Tags[index]===0){
      Div_Tags[index].innerText = 'Hello World in div 1';
   }else if(Div_Tags[index]===1){
      Div_Tags[index].innerText = 'Hello World in div 2';
   }else{
      Div_Tags[index].innerText = 'Hello World in div 3';
   }

}