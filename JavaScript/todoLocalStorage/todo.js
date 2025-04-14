let Input = document.createElement('input');
Input.setAttribute("type", "text");
Input.placeholder='Enter your task';
Input.classList.add('border-2','border-gray-500','rounded-lg','w-50','p-3')

let Button = document.createElement('button');
Button.classList.add('bg-blue-500','hover:bg-blue-700','text-white','font-bold','rounded-lg','w-50','h-10');
Button.innerText='Add Task';




let ulList = document.createElement('ul');
ulList.classList.add('list-none','mt-10','p-3');



Button.addEventListener('click',()=>{
    let task = Input.value.trim();
    let randomNum = Math.random()*1;

    localStorage.setItem(`value ${randomNum}`, task);


    let newLi = document.createElement('li');

    newLi.innerText = localStorage.getItem(`value ${randomNum}`);
    newLi.classList.add(
        'bg-gray-300',
        'w-50',
        'rounded-lg',
        'px-4',
        'py-2',
        'text-gray-700',
        'shadow-sm',
        'cursor-pointer',
        'transition-all',
        'mr-2',
        'mb-5'
    );
    ulList.appendChild(newLi);

    newLi.addEventListener('click',()=>{
        newLi.classList.toggle('line-through');
        newLi.classList.toggle('text-gray-400');
        newLi.classList.toggle('bg-green-500');

    })
})

let MainDiv = document.createElement('div');
MainDiv.classList.add('mt-10' , 'pl-10','flex','flex-col',);
MainDiv.appendChild(Input);
MainDiv.appendChild(ulList)
MainDiv.appendChild(Button);




document.body.appendChild(MainDiv);
