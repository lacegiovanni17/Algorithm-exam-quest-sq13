import stringWithout from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    const output = stringWithout("abcd");

    expect(output).toBe("abcd");
  });

  test("Example 2", () => {
    const output = stringWithout("abcd0");

    expect(output).toBe("abcd");
  });

  test("Example 3", () => {
    const output = stringWithout("1234");

    expect(output).toBe("");
  });
});

describe("Solution Tests", () => {
  test("Test 1", () => {
    const output = stringWithout("");

    expect(output).toBe("");
  });

  test("Test 2", () => {
    const output = stringWithout("abcdefghijklmopqrstuvwxyz");

    expect(output).toBe("abcdefghijklmopqrstuvwxyz");
  });

  test("Test 3", () => {
    const output = stringWithout("1234abcde5678");

    expect(output).toBe("abcde");
  });

  test("Test 4", () => {
    const output = stringWithout(
      "a1b2c3d4ef5g6h7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4"
    );

    expect(output).toBe("abcdefghjklmnopqrstuvwxyz");
  });

  test("Test 5", () => {
    const output = stringWithout(
      "A1b2c3d4ef5g6h7j8k9l0m1n2O3p4q5r6s7t8U9v0w1X2y3z4"
    );

    expect(output).toBe("AbcdefghjklmnOpqrstUvwXyz");
  });
});
