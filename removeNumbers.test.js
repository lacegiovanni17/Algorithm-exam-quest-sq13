import removeNumbers from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    const output = removeNumbers("abcd");

    expect(output).toBe("");
  });

  test("Example 2", () => {
    const output = removeNumbers("abcd0");

    expect(output).toBe("0");
  });

  test("Example 3", () => {
    const output = removeNumbers("1234");

    expect(output).toBe("1234");
  });
});

describe("Solution Tests", () => {
  test("Test 1", () => {
    const output = removeNumbers("");

    expect(output).toBe("");
  });

  test("Test 2", () => {
    const output = removeNumbers("abcdefghijklmopqrstuvwxyz");

    expect(output).toBe("");
  });

  test("Test 3", () => {
    const output = removeNumbers("1234abcde5678");

    expect(output).toBe("12345678");
  });

  test("Test 4", () => {
    const output = removeNumbers(
      "a1b2c3d4f5g6h7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4"
    );

    expect(output).toBe("123456789012345678901234");
  });

  test("Test 5", () => {
    const output = removeNumbers(
      "A1b2c3d4f5g6h7j8k9l0m1n2O3p4q5r6s7t8U9v0w1X2y3z4"
    );

    expect(output).toBe("123456789012345678901234");
  });
});
