let textOne = document.getElementById("textbox");
let button = document.getElementById("button");
let output = document.getElementById("itemone");

function addText() {
  output.innerHTML = textOne.value;
}

button.addEventListener("click", addText);
