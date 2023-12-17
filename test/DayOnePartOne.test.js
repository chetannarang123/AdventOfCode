const calculateSumPart1 = require("../src/DayOnePartOne.js");

describe("Part 1 of Advent of Code Day 1", () => {
  test("should return correct sum for given input", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    expect(calculateSumPart1(input)).toBe(142);
  });

  test("should return 0 for empty input", () => {
    expect(calculateSumPart1([""])).toBe(0);
  });

  test("should handle input with no digits", () => {
    const input = ["abc", "def", "ghi"];
    expect(calculateSumPart1(input)).toBe(0);
  });

  test("should handle single line input", () => {
    expect(calculateSumPart1(["2x3"])).toBe(23);
  });
});
