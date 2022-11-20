// describe("Example Tests", () => {
//   test("Example 1", () => {
//     expect(groupLetters("david")).toBe("aidvd");
//   });

//   test("Example 2", () => {
//     expect(groupLetters("")).toBe("");
//   });
function groupLetters(word) {
  const knownVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowels = "";
  let consonants = "";

  for (const letter of word) {
    if (knownVowels.includes(letter)) {
      vowels += letter;
    } else {
      consonants += letter;
    }
  }

  return vowels + consonants;
}
console.log(groupLetters("david"));