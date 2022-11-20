function sumOfMultiples(arr) {
  let sum = 0;
  arr.forEach((value, i) => {
    if (value % 3 === 0 || value % 5 === 0) {
      sum += value;
    }
  });
  return sum;
}
module.exports = sumOfMultiples;
