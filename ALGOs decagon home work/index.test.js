const sumOfMultiples = require("./challenge-1");
const sumOfTwoSmallestNums = require("./challenge-2");
const alphabetPosition = require("./challenge-3");
const calculateGrade = require("./challenge-4");
const accum = require("./challenge-5");

describe("Challenge 1 Tests", () => {
  test("basic tests", () => {
    expect(sumOfMultiples([6, 3, 0, 30, 7])).toBe(39);
    expect(sumOfMultiples([9, 3, 21, 30, 7, 8, 4, 2])).toBe(63);
    expect(sumOfMultiples([10, 20, 11, 17, 7])).toBe(30);
    expect(sumOfMultiples([16, 33, 3, 2])).toBe(36);
    expect(sumOfMultiples([16, 33, 15, 2])).toBe(48);
  });
});

describe("Challenge 2 Tests", () => {
  test("basic tests", () => {
    expect(sumOfTwoSmallestNums([80, 33, 44, 55, 1, 2, 14])).toBe(3);
    expect(sumOfTwoSmallestNums([12, 34, 23, 12, 67])).toBe(24);
    expect(sumOfTwoSmallestNums([999, 234, 567, 78, 2])).toBe(80);
  });
});

describe("Challenge 3 Tests", () => {
  test("basic tests", () => {
    expect(alphabetPosition("developer")).toBe("4 5 22 5 12 15 16 5 18");
    expect(alphabetPosition("decadev")).toBe("4 5 3 1 4 5 22");

    expect(alphabetPosition("success")).toBe("19 21 3 5 19 19");
  });
});

describe("Challenge 4 Tests", () => {
  test("basic tests", () => {
    expect("9119").toBe(811181);
    expect("289").toBe(46481);
    expect("345").toBe(91625);
    expect("7772").toBe(4949494);
  });
});

describe("Challenge 5 Tests", () => {
  test("basic tests", () => {
    expect(accum("abcd")).toBe("A-Bb-Ccc-Dddd");
    expect(accum("")).toBe();
    expect(accum("RqaEzty")).toBe("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
    expect(accum("cwAt")).toBe("C-Ww-Aaa-Tttt");
  });
});
