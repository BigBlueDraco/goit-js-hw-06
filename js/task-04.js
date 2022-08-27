const decrement = document.querySelector('button[data-action = "decrement"]');
const increment = document.querySelector('button[data-action = "increment"]');
const counter = document.querySelector("#value");
let counterValue =  0;

const decrementClick = () => {
    counterValue--;
    counter.textContent = counterValue;
}
const incrementClick = () => {
    counterValue++;
    counter.textContent = counterValue;
}

counter.textContent = counterValue;
decrement.addEventListener("click", decrementClick)
increment.addEventListener("click", incrementClick)