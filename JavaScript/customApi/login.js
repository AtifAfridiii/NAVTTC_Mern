
document.addEventListener('DOMContentLoaded', function() {
    console.log('Login script loaded');

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('loginFormData');
    const passwordInput = document.getElementById('passwordLogin');


    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('Login form event listener added');
    } else {
        console.error('Login form not found');
    }


    function handleLogin(event) {

        event.preventDefault();
        console.log('Login form submitted');


        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();


        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }


        const usersData = localStorage.getItem('Users');


        if (!usersData) {
            alert('No users found. Please sign up first.');
            return;
        }


        try {
            const users = JSON.parse(usersData);
            console.log('Users loaded:', users.length);


            let found = false;
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                console.log(`Checking user: ${user.Email}`);

                if (user.Email === email && user.Password === password) {
                    found = true;
                    break;
                }
            }


            if (found) {
                alert('Login successful!');

                window.location.href = './showData.html';
            } else {
                alert('Data not found. Invalid email or password.');
            }

        } catch (error) {
            console.error('Error parsing users data:', error);
            alert('An error occurred. Please try again.');
        }
    }
});
