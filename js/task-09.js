function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickChangeBtn = () =>{
  let hexColor = getRandomHexColor()
  body.style.backgroundColor = hexColor ;
  color.textContent = hexColor;
}


const body = document.querySelector("body");
const color = document.querySelector(".color")
const changeBtn = document.querySelector(".change-color")
changeBtn.addEventListener('click', onClickChangeBtn)

