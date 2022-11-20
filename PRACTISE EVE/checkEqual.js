// Use the conditional operator in the checkEqual function
// to check if two numbers are equal or not. The Function
// should return either the string "Equal" or
// the string "Not Equal"

function checkEqual(a, b) {
  a == b ? "Equal" : "Not Equal";
}

// another solution

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
