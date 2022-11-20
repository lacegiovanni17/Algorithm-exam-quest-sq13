// # Challenge 4

// Implement the function sumTwoSmallestNums(arr) that takes an array of numbers and returns the sum of the two lowest positive numbers.

// # Example

//     sumTwoSmallestNums([19, 5, 42, 2, 77]) to  return 7
//     sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) to  return 3453455
//     sumTwoSmallestNums([2, 9, 6, -1]) to  return 8
function sumTwoSmallestNums(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let sum = newArr[0] + newArr[1];
  return sum;
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
