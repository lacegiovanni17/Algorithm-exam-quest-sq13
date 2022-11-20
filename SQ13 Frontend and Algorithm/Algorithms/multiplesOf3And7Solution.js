function multiplesOf3And7(number) {
  let sum = 0;

  for (let num = 1; num < number; num++) {
    if (num % 3 === 0 || num % 7 === 0) {
      sum += num;
    }
  }

  return sum;
}

export default multiplesOf3And7;
