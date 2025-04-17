
// Form elements
let Button = document.querySelector('#btn');
let Name = document.querySelector('#signUpName');
let Email = document.querySelector('#signUpEmail');
let Passoward = document.querySelector('#signUpPassword');
let CondirmPassoward = document.querySelector('#confirmPassword');
let Adress = document.querySelector('#adress');
let postAdress = document.querySelector('#Postadress');
let PhoneNumber = document.querySelector('#signUpPhone');
let Gender1 = document.querySelector('#male');
let Gender2 = document.querySelector('#female');

// Error message elements
let nameRequired = document.querySelector('#nameRequired');
let emailReuired = document.querySelector('#emailRequired');
let passowardRequired = document.querySelector('#PasswordRequired');
let confirmPasswordRequired = document.querySelector('#confirmPasswordRequired');
let adressRequired = document.querySelector('#required');
let postAdressRequired = document.querySelector('#requiredPost');
let phoneRequired = document.querySelector('#phoneRequired');
let genderRequired = document.querySelector('#genderRequired');

// Validation regex patterns
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Password validation - using separate regex checks for better debugging
const hasLowerCase = /[a-z]/;
const hasUpperCase = /[A-Z]/;
const hasNumber = /\d/;
const hasSpecialChar = /[@$!%*?&]/;
const hasMinLength = /.{8,}/;

// Function to validate password strength
function isStrongPassword(password) {
    const checks = [
        { test: hasLowerCase.test(password), message: 'lowercase letter' },
        { test: hasUpperCase.test(password), message: 'uppercase letter' },
        { test: hasNumber.test(password), message: 'number' },
        { test: hasSpecialChar.test(password), message: 'special character (@$!%*?&)' },
        { test: hasMinLength.test(password), message: 'minimum length of 8 characters' }
    ];

    // Return failed checks for detailed error message
    const failedChecks = checks.filter(check => !check.test);
    return { isValid: failedChecks.length === 0, failedChecks };
}

let showPassword = document.querySelector('#showPassword');
let confirmPassword = document.querySelector('#showConfirm');

let loginButton = document.querySelector('#loginbtn');

let usersArray;

Button.addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validate Name
    if (Name.value.trim() === "") {
        nameRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Name is required';
        Name.classList.add('border-red-500');
        isValid = false;
    } else {
        Name.classList.add('border-green-500');
    }

    // Validate Email
    if (Email.value.trim() === '') {
        emailReuired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Email is required';
        Email.classList.add('border-red-500');
        isValid = false;
    } else if (!emailRegex.test(Email.value)) {
        emailReuired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Invalid email format';
        Email.classList.add('border-red-500');
        isValid = false;
    } else {
        Email.classList.add('border-green-500');
    }

    // Validate Password
    if (Passoward.value.trim() === '') {
        passowardRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Password cannot be empty';
        Passoward.classList.add('border-red-500');
        isValid = false;
    } else {
        // Check password strength
        const passwordCheck = isStrongPassword(Passoward.value);

        if (!passwordCheck.isValid) {
            // Create detailed error message
            const missingRequirements = passwordCheck.failedChecks.map(check => check.message).join(', ');
            passowardRequired.innerHTML = `<i class="fas fa-exclamation-circle mr-1"></i> Password is missing: ${missingRequirements}`;
            Passoward.classList.add('border-red-500');
            isValid = false;

            // Debug password validation
            console.log('Password:', Passoward.value);
            console.log('Failed checks:', passwordCheck.failedChecks);
        } else {
            Passoward.classList.add('border-green-500');
        }
    }

    // Validate Confirm Password
    if (CondirmPassoward.value.trim() === '') {
        confirmPasswordRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Confirm password is required';
        CondirmPassoward.classList.add('border-red-500');
        isValid = false;
    } else if (Passoward.value !== CondirmPassoward.value) {
        confirmPasswordRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Passwords do not match';
        CondirmPassoward.classList.add('border-red-500');
        isValid = false;
    } else if (Passoward.value === CondirmPassoward.value && Passoward.value !== '') {
        CondirmPassoward.classList.add('border-green-500');
    }

    // Validate Postal Address
    if (postAdress.value.trim() === '') {
        postAdressRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Postal address is required';
        postAdress.classList.add('border-red-500');
        isValid = false;
    } else {
        postAdress.classList.add('border-green-500');
    }

    // Validate Address
    if (Adress.value.trim() === '') {
        adressRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Address is required';
        Adress.classList.add('border-red-500');
        isValid = false;
    } else {
        Adress.classList.add('border-green-500');
    }

    // Validate Phone Number
    if (PhoneNumber.value.trim() === "") {
        phoneRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Phone number is required';
        PhoneNumber.classList.add('border-red-500');
        isValid = false;
    } else if (!/^\d{10,11}$/.test(PhoneNumber.value)) {
        phoneRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Please enter a valid phone number (10-11 digits)';
        PhoneNumber.classList.add('border-red-500');
        isValid = false;
    } else {
        PhoneNumber.classList.add('border-green-500');
    }

    // Validate Gender
    if (!Gender1.checked && !Gender2.checked) {
        genderRequired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Please select a gender';
        isValid = false;
    }

    // If validation fails, stop form submission
    if (!isValid) {
        return;
    }

    // Create user object
    let UserObj = {
        Name: Name.value,
        Email: Email.value,
        Password: Passoward.value,
        Address: Adress.value,
        PostAddress: postAdress.value,
        Gender: Gender1.checked ? Gender1.value : Gender2.value,
        Phone: PhoneNumber.value,
    };

    // Get existing users or create empty array
    let existingData = localStorage.getItem('Users');
    usersArray = existingData ? JSON.parse(existingData) : [];

    // Check if email already exists
    const emailExists = usersArray.some(user => user.Email === Email.value);
    if (emailExists) {
        emailReuired.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> This email is already registered';
        Email.classList.add('border-red-500');
        return;
    }

    // Add new user and save to localStorage
    usersArray.push(UserObj);
    localStorage.setItem('Users', JSON.stringify(usersArray));

    // Show success message
    const signupMessage = document.getElementById('signupMessage');
    const signupMessageText = document.getElementById('signupMessageText');

    if (signupMessage && signupMessageText) {
        signupMessage.classList.remove('hidden');
        signupMessage.classList.add('bg-green-100', 'text-green-800', 'p-4', 'rounded-lg');
        signupMessageText.innerHTML = '<i class="fas fa-check-circle mr-1"></i> Registration successful! You can now log in.';

        // Reset form
        document.getElementById('signUpForm').reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            signupMessage.classList.add('hidden');
        }, 5000);
    }

    console.log('User data saved:', usersArray);



// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const myArr = JSON.parse(text);
// console.log(myArr);






})


showPassword.addEventListener('click', () => {
    if(Passoward.type==='password'){
        Passoward.type='text';
        showPassword.innerHTML='<i class="fas fa-eye-slash"></i>';
    }else{
        Passoward.type='password';
        showPassword.innerHTML='<i class="fas fa-eye"></i>';
    }
});

confirmPassword.addEventListener('click', () => {
    if(CondirmPassoward.type==='password'){
        CondirmPassoward.type='text';
        confirmPassword.innerHTML='<i class="fas fa-eye-slash"></i>';
    }else{
        CondirmPassoward.type='password';
        confirmPassword.innerHTML='<i class="fas fa-eye"></i>';
    }
})

function clearErrors() {
    // Clear all error messages
    const errorElements = document.querySelectorAll('.text-red-500');
    errorElements.forEach((element) => {
        element.innerHTML = '';
    });

    // Remove all validation border colors
    const inputElements = document.querySelectorAll('input, textarea');
    inputElements.forEach((element) => {
        element.classList.remove('border-red-500', 'border-green-500');
    });
}

loginButton.addEventListener('click', (e) => {

    e.preventDefault();
    window.location.href = './index.html';
})


// No login-related code here - moved to login.js