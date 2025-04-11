
let apiData = 'https://jsonplaceholder.typicode.com/users';

let FetchData = async () => {

    let Response = await fetch(apiData);
    console.log(Response);

    let data = await Response.json();

    console.log(data);

    let tableBody = document.querySelector('#tableData');
    tableBody.innerHTML = '';




    data.forEach(element => {


        let TrName = document.createElement('td');
        let TruserName = document.createElement('td');;
        let Tremail = document.createElement('td');

        TrName.className = 'px-4 py-2 border';
        TruserName.className = 'px-4 py-2 border';
        Tremail.className = 'px-4 py-2 border';

        TrName.innerText = element.name;
        TruserName.innerText = element.username;
        Tremail.innerText = element.email;




        let tableRow = document.createElement('tr');

        tableRow.className='bg-green-500 items-center text-center text-sm'
       

        tableRow.appendChild(TrName);
        tableRow.appendChild(TruserName);
        tableRow.appendChild(Tremail);
        tableBody.appendChild(tableRow);

        // console.log(userData);
    });



}

// accessing button

let ClickBtn = document.querySelector('#btn');


ClickBtn.addEventListener('click', function () {

    FetchData();
})



// let apiData = 'https://jsonplaceholder.typicode.com/users';

// let FetchData = async () => {
//     let response = await fetch(apiData);
//     let data = await response.json();

//     let tableBody = document.querySelector('#tableData');
//     tableBody.innerHTML = ''; // Clear previous rows if any

//     data.forEach(element => {
//         // Create <td> cells
//         let TrName = document.createElement('td');
//         let TruserName = document.createElement('td');
//         let Tremail = document.createElement('td');

//         TrName.innerText = element.name;
//         TruserName.innerText = element.username;
//         Tremail.innerText = element.email;

//         // Create a new row and append the <td> cells
//         let tableRow = document.createElement('tr');
//         tableRow.appendChild(TrName);
//         tableRow.appendChild(TruserName);
//         tableRow.appendChild(Tremail);

//         // Append the row to the tbody
//         tableBody.appendChild(tableRow);
//     });
// }

// // Button click event
// let ClickBtn = document.querySelector('#btn');
// ClickBtn.addEventListener('click', FetchData);
