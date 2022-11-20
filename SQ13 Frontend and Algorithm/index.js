
const MANGO_ICON = "🥭";
const ORANGE_ICON = "🍊";
const APPLE_ICON = "🍏";

const display = document.querySelector(".display");
const mango = document.getElementById("mango-btn");
const mangoDisplay = document.getElementById("mango-display");
const orange = document.getElementById("orange-btn");
const orangeDisplay = document.getElementById("orange-display");
const apple = document.getElementById("apple-btn");
const appleDisplay = document.getElementById("apple-display");

let mangos = 0;
let oranges = 0;
let apples = 0;

function addMango() {
  mangos++;
  display.textContent += MANGO_ICON;
  mangoDisplay.textContent = mangos;
}

function addOrange() {
  oranges++;
  display.textContent += ORANGE_ICON;
  orangeDisplay.textContent = oranges;
}

function addApple() {
  apples++;
  display.textContent += APPLE_ICON;
  appleDisplay.textContent = apples;
}

mango.addEventListener("click", addMango);
orange.addEventListener("click", addOrange);
apple.addEventListener("click", addApple);
