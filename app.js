const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
const firstNameError = document.querySelector('.fname-error');
const lastNameError = document.querySelector('.lname-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

form.addEventListener('submit', (e) => 
{
    e.preventDefault();

    //
    //CHECKING FOR FIRSTNAME VALUE
    //

    if(firstName.value === '')
    {
        firstNameError.classList.remove('d-none');
        firstNameError.innerHTML = 'Cannot be empty';
        firstName.classList.add('error');
    }
    else
    {
        firstNameError.classList.add('d-none');
        firstNameError.innerHTML = '';
        firstName.classList.remove('error');
    }

    //
    //CHECKING FOR LASTNAME VALUE
    //

    if(lastName.value === '')
    {
        lastNameError.classList.remove('d-none');
        lastNameError.innerHTML = 'Cannot be empty';
        lastName.classList.add('error');
    }
    else
    {
        lastNameError.classList.add('d-none');
        lastNameError.innerHTML = '';
        lastName.classList.remove('error');
    }

    //
    //CHECKING FOR EMAIL VALUE
    //

    if(email.value === '')
    {
        emailError.classList.remove('d-none');
        emailError.innerHTML = 'Cannot be empty';
        email.classList.add('error');
    }
    else if(!validateEmail(email.value))
    {
        emailError.classList.remove('d-none');
        emailError.innerHTML = 'The email is not formatted properly';
        email.classList.add('error');
    }
    else
    {
        emailError.classList.add('d-none');
        emailError.innerHTML = '';
        email.classList.remove('error');
    }

    //
    //CHECKING FOR PASSWORD
    //

    if(password.value === '' || password.value.length <= 5)
    {
        passwordError.classList.remove('d-none');
        passwordError.innerHTML = 'Password has to be longer than 5 characters';
        password.classList.add('error');
    }
    else
    {
        passwordError.classList.add('d-none');
        passwordError.innerHTML = '';
        password.classList.remove('error');
    }
})


function validateEmail(email) {
    let re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }