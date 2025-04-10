

let Parent = document.querySelector('.Parent');

let ReplaceBtn = document.querySelector('.btn');
let isCHange = false ;

ReplaceBtn.addEventListener('click',function(event){
    event.preventDefault();
    let Child = document.querySelectorAll('.Child');

   for (let index = 0; index < Child.length; index++) {
    let newChild = document.createElement('li');
    newChild.className = 'Child';
    if(isCHange){
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
    }else{
        if(index==0){
            newChild.innerText='List 1'
         } else if (index===1){
            newChild.innerText='List 2';
         }else if(index===2){
            newChild.innerText='List 3';
         }else if(index===3){
            newChild.innerText='List 4';
         }else{
            newChild.innerText='List 5 ';
         }
    }

    Parent.replaceChild(newChild,Child[index]);


   }

   isCHange=!isCHange;
})




