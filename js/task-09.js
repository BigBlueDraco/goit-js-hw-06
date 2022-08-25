function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickChangeBtn = () =>{
  body.style.backgroundColor = getRandomHexColor();
}


const body = document.querySelector("body");
const changeBtn = document.querySelector(".change-color")
changeBtn.addEventListener('click', onClickChangeBtn)