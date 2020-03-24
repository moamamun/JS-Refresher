const form = document.querySelector(".signup-form")
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{4,15}$/;

form.addEventListener('submit', e => {
    e.preventDefault();   
    //validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        //good info
        feedback.textContent = "Valid"
    } else {
        //bad info
        feedback.textContent = "Invalid"
    }
})

//live feedback
form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')
    } else {
        form.username.setAttribute('class', 'error')
    }
})