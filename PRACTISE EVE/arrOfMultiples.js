// describe("Example Tests", function () {
//   it("Example 1", function () {
//     expect(arrayMultiples([5])).toEqual([5, 10, 15, 20, 25]);
//   });

//   it("Example 2", function () {
//     expect(arrayMultiples([1, 4])).toEqual([1, 2, 3, 4, 5, 4, 8, 12, 16, 20]);
//   });

//   it("Example 3", function () {
//     expect(arrayMultiples([])).toEqual([]);
//   });
// });

function arrayMultiples(arr) {
  let multiples = [];
  for (let item of arr) {
    multiples.push(item);
    multiples.push(item * 2);
    multiples.push(item * 3);
    multiples.push(item * 4);
    multiples.push(item * 5);
  }

  return multiples;
}
console.log(arrayMultiples([1, 4]));
