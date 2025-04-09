

let Parent = document.querySelector('.Parent');
let Child = document.querySelectorAll('.Child');

let ReplaceBtn = document.querySelector('.btn');

ReplaceBtn.addEventListener('click',function(event){
    event.preventDefault();
   for (let index = 0; index < Child.length; index++) {
    let newChild = document.createElement('li');
     if(index===0){
        newChild.innerText='This is Replace Content';
     }else if (index===1){
        newChild.innerText='This is new Text at 1 index';
     }else if(index===2){
        newChild.innerText='This is a simple  Content';
     }else if(index===3){
        newChild.innerText='This is some Content';
     }else{
        newChild.innerText='This is some Content when the button is clicked ';
     }
    Parent.replaceChild(newChild,Child[index]);

   }
})

