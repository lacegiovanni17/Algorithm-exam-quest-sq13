function reverseMultiply(arrOfNumbers) {
  const result = [];
  const length = arrOfNumbers.length;

  for (let i = 0; i < arrOfNumbers.length; i++) {
    const num = arrOfNumbers[i];
    const multiple = length - i;

    result.push(num * multiple);
  }

  return result;
}

export default reverseMultiply;
