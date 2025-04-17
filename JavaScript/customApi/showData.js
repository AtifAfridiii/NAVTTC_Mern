// DOM Elements
const tbody = document.querySelector('#tbody');
const tableCard = document.querySelector('#tableCard');
const searchBtn = document.querySelector('#search');
const resetBtn = document.querySelector('#resetSearch');
const searchInput = document.querySelector('#searchData');
const searchMessage = document.querySelector('#searchMessage');
const searchMessageText = document.querySelector('#searchMessageText');
const noDataMessage = document.querySelector('#noDataMessage');

// Get user data from localStorage
const usersData = localStorage.getItem('Users');
let users = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Initialize the page with user data
function initializePage() {
    // Check if users data exists
    if (!usersData) {
        // Show no data message and hide table
        noDataMessage.classList.remove('hidden');
        tableCard.classList.add('hidden');
        return;
    }

    try {
        // Parse user data
        users = JSON.parse(usersData);

        // Check if users array is empty
        if (users.length === 0) {
            noDataMessage.classList.remove('hidden');
            tableCard.classList.add('hidden');
            return;
        }

        // Display all users
        displayUsers(users);

    } catch (error) {
        console.error('Error parsing user data:', error);
        noDataMessage.classList.remove('hidden');
        tableCard.classList.add('hidden');
    }
}

// Display users in the table
function displayUsers(usersToDisplay) {
    // Clear the table body
    tbody.innerHTML = '';

    // Show table and hide messages
    tableCard.classList.remove('hidden');
    searchMessage.classList.add('hidden');

    // Create table rows for each user
    usersToDisplay.forEach(user => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';

        // Create table cells
        const cells = [
            { value: user.Name },
            { value: user.Email },
            { value: user.Gender },
            { value: user.PostAddress },
            { value: user.Phone }
        ];

        // Add cells to row
        cells.forEach(cell => {
            const td = document.createElement('td');
            td.className = 'px-6 py-4 whitespace-nowrap text-sm text-gray-700';
            td.textContent = cell.value;
            row.appendChild(td);
        });

        // Add row to table
        tbody.appendChild(row);
    });
}

// Highlight search terms in text
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Search functionality
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    // Validate search input
    if (searchTerm === '') {
        searchMessage.classList.remove('hidden', 'bg-yellow-100', 'bg-red-100');
        searchMessage.classList.add('bg-red-100', 'text-red-800');
        searchMessageText.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> Please enter a name or email to search';
        return;
    }

    // Check if users data exists
    if (!users || users.length === 0) {
        noDataMessage.classList.remove('hidden');
        tableCard.classList.add('hidden');
        return;
    }

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.Email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if any users match the search
    if (filteredUsers.length === 0) {
        // Show not found message
        searchMessage.classList.remove('hidden', 'bg-yellow-100', 'bg-red-100');
        searchMessage.classList.add('bg-yellow-100', 'text-yellow-800');
        searchMessageText.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i> No matches found for "${searchTerm}". Try a different search term.`;

        // Hide the table
        tableCard.classList.add('hidden');
    } else {
        // Show search results message
        searchMessage.classList.remove('hidden', 'bg-red-100');
        searchMessage.classList.add('bg-green-100', 'text-green-800');
        searchMessageText.innerHTML = `<i class="fas fa-check-circle mr-2"></i> Found ${filteredUsers.length} ${filteredUsers.length === 1 ? 'match' : 'matches'} for "${searchTerm}"`;

        // Display filtered users
        displayUsersWithHighlight(filteredUsers, searchTerm);
    }
});

// Display users with highlighted search terms
function displayUsersWithHighlight(usersToDisplay, searchTerm) {
    // Clear the table body
    tbody.innerHTML = '';

    // Show table
    tableCard.classList.remove('hidden');

    // Create table rows for each user
    usersToDisplay.forEach(user => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';

        // Create table cells with highlighted text
        const cells = [
            { value: user.Name, highlight: true },
            { value: user.Email, highlight: true },
            { value: user.Gender, highlight: false },
            { value: user.PostAddress, highlight: false },
            { value: user.Phone, highlight: false }
        ];

        // Add cells to row
        cells.forEach(cell => {
            const td = document.createElement('td');
            td.className = 'px-6 py-4 whitespace-nowrap text-sm text-gray-700';

            if (cell.highlight) {
                td.innerHTML = highlightText(cell.value, searchTerm);
            } else {
                td.textContent = cell.value;
            }

            row.appendChild(td);
        });

        // Add row to table
        tbody.appendChild(row);
    });
}

// Reset search functionality
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Clear search input
    searchInput.value = '';

    // Hide messages
    searchMessage.classList.add('hidden');

    // Show all users
    if (users && users.length > 0) {
        displayUsers(users);
    } else {
        noDataMessage.classList.remove('hidden');
        tableCard.classList.add('hidden');
    }
});