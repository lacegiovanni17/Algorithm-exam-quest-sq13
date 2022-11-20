// describe("Example Tests", function () {
//   it("Example 1", function () {
//     expect(deutschTranslator("ihr wir")).toBe("you we");
//   });
//   it("Example 2", function () {
//     expect(deutschTranslator("du bist ein kind")).toBe("you are a child");
//   });
//   it("Example 3", function () {
//     expect(deutschTranslator("brot")).toBe("bread");
//   });
// });
// Do not modify the dictionary below
const deutschDict = {
  er: "he",
  sie: "she",
  es: "it",
  du: "you",
  ich: "I",
  wir: "we",
  ihr: "you",
  brot: "bread",
  ein: "a",
  eine: "a",
  frau: "woman",
  mann: "man",
  kind: "child",
  madchen: "girl",
  junge: "boy",
  bist: "are",
  bin: "am",
  ist: "is",
  und: "and",
  wasser: "water",
};
// Do not modify the dictionary above
function deutschTranslator(sentence) {
  const words = sentence.split(" ");
  let translation = "";

  for (const char of words) {
    const translated = deutschDict[char.toLowerCase()];
    if (translated) {
      translation += ` ${translated}`;
    }
  }
  return translation;
}
console.log(deutschTranslator("brot"));
