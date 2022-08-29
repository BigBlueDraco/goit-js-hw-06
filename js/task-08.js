const loginForm = document.querySelector(".login-form")

const onSubmit = (event) => {
    event.preventDefault();
    let {email, password} = event.target.elements
    if(email.value != '' && password.value != '')
    {
        console.log({
            email: email.value,
            password: password.value
        })
        loginForm.reset();
        return
    }
    alert("Всі поля повинні бути заповнені")
        
}

loginForm.addEventListener("submit", onSubmit)