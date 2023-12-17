const {
  findFirstAndLastDigit,
  calculateSumPart2,
} = require("../src/DayOnePartTwo"); // Import your functions

describe("findFirstAndLastDigit", () => {
  test("line with both numbers and words", () => {
    expect(findFirstAndLastDigit("three 3 two 2 one")).toBe(31);
  });

  test("line with only number words", () => {
    expect(findFirstAndLastDigit("one two three")).toBe(13);
  });

  test("line with only numbers", () => {
    expect(findFirstAndLastDigit("123")).toBe(13);
  });

  test("line with no numbers or number words", () => {
    expect(findFirstAndLastDigit("hello world")).toBe(0);
  });

  test("numbers as part of other words", () => {
    expect(findFirstAndLastDigit("someone ate nine apples")).toBe(19);
  });

  test("empty line", () => {
    expect(findFirstAndLastDigit("")).toBe(0);
  });
});

describe("calculateSumPart2", () => {
  test("multiple lines with mix of numbers and words", () => {
    const inputs = ["three 3 two 2 one", "1 apple 2 oranges three"];
    expect(calculateSumPart2(inputs)).toBe(44); // 31 from first line and 13 from second
  });

  test("lines with only numbers", () => {
    const inputs = ["123", "456"];
    expect(calculateSumPart2(inputs)).toBe(59); // 13 from first line and 46 from second
  });

  test("lines with only number words", () => {
    const inputs = ["one two three", "four five six"];
    expect(calculateSumPart2(inputs)).toBe(59); // 13 from first line and 46 from second
  });

  test("lines with no numbers or number words", () => {
    const inputs = ["hello world", "testing"];
    expect(calculateSumPart2(inputs)).toBe(0);
  });

  test("empty array of lines", () => {
    expect(calculateSumPart2([])).toBe(0);
  });
});
