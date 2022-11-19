import reverseMultiply from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    const result = reverseMultiply([1, 2, 3, 4, 5]);

    expect(result).toEqual([5, 8, 9, 8, 5]);
  });

  test("Example 2", () => {
    const result = reverseMultiply([1, 2, 3]);

    expect(result).toEqual([3, 4, 3]);
  });

  test("Example 3", () => {
    const result = reverseMultiply([]);

    expect(result).toEqual([]);
  });
});

describe("Solution Tests", () => {
  test("Test 1", () => {
    const result = reverseMultiply([]);

    expect(result).toEqual([]);
  });

  test("Test 2", () => {
    const result = reverseMultiply([10]);

    expect(result).toEqual([10]);
  });

  test("Test 3", () => {
    const result = reverseMultiply([9, 8]);

    expect(result).toEqual([18, 8]);
  });

  test("Test 4", () => {
    const result = reverseMultiply([1, 2, 3]);

    expect(result).toEqual([3, 4, 3]);
  });

  test("Test 5", () => {
    const result = reverseMultiply([10, 20, 30, 40]);

    expect(result).toEqual([40, 60, 60, 40]);
  });

  test("Test 6", () => {
    const result = reverseMultiply([1, 2, 3, 4, 5]);

    expect(result).toEqual([5, 8, 9, 8, 5]);
  });

  test("Test 7", () => {
    const result = reverseMultiply([-1, -2, -3, -4, -5, -6]);

    expect(result).toEqual([-6, -10, -12, -12, -10, -6]);
  });

  test("Test 8", () => {
    const result = reverseMultiply([1, 2, 3, 4, 5, 6, 7]);

    expect(result).toEqual([7, 12, 15, 16, 15, 12, 7]);
  });

  test("Test 9", () => {
    const result = reverseMultiply([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(result).toEqual([8, 14, 18, 20, 20, 18, 14, 8]);
  });

  test("Test 10", () => {
    const result = reverseMultiply([
      1, 2, 3, 4, 5, 6, 7, 4, 2, 3, 34, 12, 123, 5, 4, 23, 425, 24, 24,
    ]);

    expect(result).toEqual([
      19, 36, 51, 64, 75, 84, 91, 48, 22, 30, 306, 96, 861, 30, 20, 92, 1275,
      48, 24,
    ]);
  });
});
