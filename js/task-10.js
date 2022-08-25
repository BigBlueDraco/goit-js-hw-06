const controls = document.querySelector("#controls")
const div = document.querySelector("#boxes")
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
let boxes = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onCreate = ()=>{
  
  destroyBoxes();
  for(let i = 0; i < controls.querySelector("input").value; i++){
    let box = `<div class="box" style =" display: block; width: ${30+boxes.length*10}px; height: ${30+boxes.length*10}px; background-color: ${getRandomHexColor()}" >${boxes.length}</div>`
    boxes.push(box);
    
  }
  div.insertAdjacentHTML("beforeend", boxes.join(""))
}

const destroyBoxes = ()=>{
  console.log(boxes.length)
  let arrayLength =boxes.length;
  for(let i = 0; i < arrayLength; i++){
    console.log(i)
    boxes.pop();
    div.removeChild(div.lastChild);
  }
}  
 
create.addEventListener("click", onCreate)
destroy.addEventListener("click", destroyBoxes)
