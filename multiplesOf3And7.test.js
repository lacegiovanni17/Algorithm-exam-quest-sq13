import multiplesOf3And7 from "./solution";

describe("Example Tests", () => {
  it("should handle the first example", () => {
    expect(multiplesOf3And7(10)).toBe(25);
  });
});

describe("Solution Tests", () => {
  it("should handle basics", () => {
    expect(multiplesOf3And7(10)).toBe(25);
    expect(multiplesOf3And7(20)).toBe(84);
  });

  it("should handle zeroes", () => {
    expect(multiplesOf3And7(0)).toBe(0);
    expect(multiplesOf3And7(1)).toBe(0);
  });

  it("should handle large numbers", () => {
    expect(multiplesOf3And7(200)).toBe(8530);
  });

  it("should work on random tests", () => {
    const multiplesOf3And7Ref = (number) => {
      let sum = 0;

      for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 7 === 0) {
          sum += i;
        }
      }

      return sum;
    };

    for (let i = 0; i < 10; i++) {
      let n = ~~(Math.random() * 10000);
      expect(multiplesOf3And7(n)).toBe(multiplesOf3And7Ref(n));
    }
  });
});
