const validInput = document.querySelector("#validation-input")
const validLenght = validInput.dataset.length

const onValidBlur = (event) =>{
    let inputLenght = event.target.value.length 
    validInput.classList.remove("valid")
    validInput.classList.add("invalid")
    if(inputLenght> validLenght){
        validInput.classList.remove("invalid")
        validInput.classList.add("valid")
    }
    
}

validInput.addEventListener("blur", onValidBlur)