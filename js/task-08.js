const loginForm = document.querySelector(".login-form")

const onSubmit = (event) => {
    event.preventDefault();
    let {email = undefined, password = undefined} = event.target.elements
    if(email.value != '' || password.value != '')
    {
        console.log({
            email: email.value,
            password: email.value
        })
        loginForm.reset();
        return
    }
    alert("Всі поля повинні бути заповнені")
        
}

loginForm.addEventListener("submit", onSubmit)