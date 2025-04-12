
let apiData = 'https://jsonplaceholder.typicode.com/users';
let changed = false;

let tableBody = document.querySelector('#tableData');
tableBody.innerHTML = '';


let FetchData = async () => {

    let Response = await fetch(apiData);
    console.log(Response);

    let data = await Response.json();

    console.log(data);

    data.forEach(element => {


        let TrName = document.createElement('td');
        let TruserName = document.createElement('td');;
        let Tremail = document.createElement('td');

        TrName.className = 'px-4 py-2 border-2';
        TruserName.className = 'px-4 py-2 border-2';
        Tremail.className = 'px-4 py-2 border-2';

        TrName.innerText = element.name;
        TruserName.innerText = element.username;
        Tremail.innerText = element.email;

        let tableRow = document.createElement('tr');

        tableRow.className = 'bg-green-500 items-center text-center text-sm'

        tableRow.appendChild(TrName);
        tableRow.appendChild(TruserName);
        tableRow.appendChild(Tremail);
        tableBody.appendChild(tableRow);

    });

    let searchBtn = document.querySelector('#SearchBoxbtn');
    let searchBox = document.querySelector('#searchBox');

    searchBtn.addEventListener('click', () => {
        let searchValue = searchBox.value.toLowerCase();

        let searchData = data.filter(element => {
            return element.name.toLowerCase().includes(searchValue);
        });

        tableBody.innerHTML = '';

        searchData.forEach(element => {
            let TrName = document.createElement('td');
            let TruserName = document.createElement('td');
            let Tremail = document.createElement('td');

            TrName.className = 'px-4 py-2 border-2';
            TruserName.className = 'px-4 py-2 border-2';
            Tremail.className = 'px-4 py-2 border-2';

            TrName.innerText = element.name;
            TruserName.innerText = element.username;
            Tremail.innerText = element.email;

            let tableRow = document.createElement('tr');
            tableRow.className = 'bg-green-500 items-center text-center text-sm';

            tableRow.appendChild(TrName);
            tableRow.appendChild(TruserName);
            tableRow.appendChild(Tremail);
            tableBody.appendChild(tableRow);
        });

        if (searchData.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center py-4 text-red-500">
                        No results found
                    </td>
                </tr>
            `;
        }
    });





}

// accessing button

let ClickBtn = document.querySelector('#btn');


ClickBtn.addEventListener('click', function () {

    if (!changed) {
        FetchData();
    }
    changed = true
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
