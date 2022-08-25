const inputName = document.querySelector("#name-input") 
const outputName = document.querySelector("#name-output")

const onInput = (event) =>{
    outputName.textContent = event.target.value
    if(event.target.value == "Слава Україні"){ //Не баг а фіча)))
        outputName.textContent = "=^.^= Героям Слава =^.^="
    }
}

inputName.addEventListener("input", onInput)