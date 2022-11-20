// describe("Example tests", () => {
//   it("Example 1", () => {
//     expect(findMissing([0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe(9);
//   });

//   it("Example 2", () => {
//     expect(findMissing([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(-1);
//   });
// });

function findMissing(arrOfNumbers) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (!arrOfNumbers.includes(number)) {
      return number;
    }
  }

  return -1;
}

console.log(findMissing([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
