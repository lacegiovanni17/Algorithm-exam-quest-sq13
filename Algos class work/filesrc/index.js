import "./style.css";

// TODO (see instructions)
import "./style.css";

// TODO (see instructions)
let incBtn = document.querySelector(".increment");
let decBtn = document.querySelector(".decrement");
const display = document.querySelector(".counter");

incBtn.addEventListener("click", increase);
let value = 0;
function increase() {
  value += 1;
  display.texContent = value;
}

decBtn.addEventListener("click", decrease);
function decrease() {
  value -= 1;
  display.textContent = value;
}