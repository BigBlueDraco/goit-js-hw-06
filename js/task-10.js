// const controls = document.querySelector("#controls")
const input = document.querySelector("input")
const div = document.querySelector("#boxes")
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
let boxes = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onCreate = ()=>{
  // let tmpBoxes =[...boxes];
  div.innerHTML = "";
  for(let i = 0; i < input.value; i++){
    let box = `<div class="box" style =" display: block; width: ${30+boxes.length*10}px; height: ${30+boxes.length*10}px; background-color: ${getRandomHexColor()}" ></div>`
    boxes.push(box);  
  }
  // destroyBoxes();
  // boxes = [...tmpBoxes]
  div.insertAdjacentHTML("beforeend", boxes.join(""))
  input.value="";
}

const destroyBoxes = ()=>{
  div.innerHTML = "";
  boxes = [];
}  

create.addEventListener("click", onCreate)
destroy.addEventListener("click", destroyBoxes)
