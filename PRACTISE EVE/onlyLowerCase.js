// describe("Example Tests", function () {
//   it("Example 1", function () {
//     expect(allLowerCaseLetters("Qualified")).toBe("ualified");
//   });

//   it("Example 2", function () {
//     expect(allLowerCaseLetters("ADecadeV")).toBe("ecade");
//   });

//   it("Example 3", function () {
//     expect(allLowerCaseLetters("HELLO")).toBe("");
//   });
// });
function allLowerCaseLetters(str) {
  let newStr = "";
  for (let letter of str) {
    if (letter === letter.toLowerCase()) {
      newStr += letter;
    }
  }
  return newStr;
}

console.log(allLowerCaseLetters("ADecadeV"));
