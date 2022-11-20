// Challenge: create a calculator that takes two inputs and a function as an input and complete the original
//functions so we have a multiply, divide, addition & subtraction etc so that when you call the calculator
//something like calculator(6,3,subtract) will give you the right answer,

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
