/*Form Validation*/
const form = document.querySelector('.form-validation');
const username = document.querySelector('#username');
const email = document.querySelector('#user-email');
const password = document.querySelector('#user-password');
const password2 = document.querySelector('#user-password-2')

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    console.log(username)

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error-msg');

    errorDisplay.innerText= `${message}`;
    errorDisplay.classList.add('form-error-msg');
    element.classList.add('form-input-error')
    element.classList.remove('form-input-success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error-msg');

    errorDisplay.innerText = '';
    element.classList.add('form-input-success');
    element.classList.remove('form-input-error')
};

/*Modal Demo*/

const btnModalDemo = document.querySelector(".btn-modal-demo");
const modal = document.querySelector(".modal-demo")
const bodyOverlay = document.querySelector(".body-overlay-active")
const btnModalCancel = document.querySelectorAll(".btn-modal-cancel")

btnModalDemo.addEventListener("click",()=>{
    bodyOverlay.style.display = "block"
    modal.style.display = "flex"
})

btnModalCancel.forEach(btn=>{
    btn.addEventListener("click",()=>{
        bodyOverlay.style.display = "none"
        modal.style.display = "none"
    })
})

/*Rating*/

const starsGiven = document.querySelectorAll('.rating-input')
const ratingDisplay = document.querySelector('.rating-display')

starsGiven.forEach(starInput=>{
    starInput.addEventListener('click',()=>{
        ratingDisplay.innerHTML = `<p class="md-1 text-bold-500">You gave ${starInput.value} star</p>`
    })
})

/*Snackbar*/

const btnSnackbarDemo = document.querySelector('.btn-snackbar-demo')
const snackbar = document.querySelector('.snackbar-demo')
const btnSnackbarCancel = document.querySelectorAll('.snackbar-dismiss')

btnSnackbarDemo.addEventListener('click',()=>{
    snackbar.style.display = "flex"
})

btnSnackbarCancel.forEach(btn=>{
    btn.addEventListener('click',()=>snackbar.style.display="none")
})

/*Floating Action Button*/

const floatingActionBtn =  document.querySelector('.btn-fab')