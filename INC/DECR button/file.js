const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
// let count = document.getElementById('count');
let count = 0;


increaseBtn.addEventListener("click", () => {
  let count = document.getElementById("count").innerText;
  count++;
  document.getElementById("count").innerText = count;
});

decreaseBtn.addEventListener("click", () => {
  let count = document.getElementById("count").innerText;
  if (count > 0) {
    count--;
  } else {
    count = count;
  }
  document.getElementById("count").innerText = count;
});
