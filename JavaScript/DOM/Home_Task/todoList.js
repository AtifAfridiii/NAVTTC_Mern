let userInput = document.querySelector('#todoInput');
let btnInput = document.querySelector('#todoBtn');
let ulParent = document.querySelector('#ulParent');
emptyList = document.querySelector('#btnDiv');
let noItem = document.querySelector('#noItemPara');


btnInput.addEventListener('click', function (e) {
    e.preventDefault();
    let input = userInput.value.trim();

    if (!input) {
        alert('Please enter a task');



        noItem.innerText='No task added yet';

        emptyList.appendChild(noItem);



        return;
    }

    let taskWrapper = document.createElement('div');
    taskWrapper.classList.add('flex', 'justify-between', 'items-center');


    let newLi = document.createElement('li');
    newLi.innerText = input;
    newLi.classList.add(
        'bg-gray-100',
        'w-full',
        'rounded-lg',
        'px-4',
        'py-2',
        'text-gray-700',
        'shadow-sm',
        'cursor-pointer',
        'transition-all',
        'mr-2'
    );


    newLi.addEventListener('click', function () {
        newLi.classList.toggle('line-through');
        newLi.classList.toggle('text-gray-400');
        newLi.classList.toggle('bg-green-500');
    });


    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('text-red-500', 'font-bold', 'px-3', 'py-2');

    deleteBtn.addEventListener('click', function () {
        taskWrapper.remove();
    });


    taskWrapper.appendChild(newLi);
    taskWrapper.appendChild(deleteBtn);


    ulParent.appendChild(taskWrapper);


    userInput.value = '';
});
