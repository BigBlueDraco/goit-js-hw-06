const inputName = document.querySelector("#name-input") 
const outputName = document.querySelector("#name-output")

const onInput = (event) =>{
    switch (event.target.value){
        case "": 
            outputName.textContent = "Anonymous";
        return;
        case "Слава Україні" : 
            outputName.textContent = "=^.^= Героям Слава =^.^=";
        return;
        default: 
            outputName.textContent = event.target.value ;
        return;
    }    
}

inputName.addEventListener("input", onInput)