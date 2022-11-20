function sumOfTwoSmallestNums(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }
  let properArr = result.sort(function (a, b) {
    return a - b;
  });
  let firstNum = properArr[0];
  let secondNum = properArr[1];
  let final = firstNum + secondNum;
  return final;
}

module.exports = sumOfTwoSmallestNums;
