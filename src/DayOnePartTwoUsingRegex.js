const fs = require("fs");
const path = require("path");

function calculateSumPart2UsingRegex(input) {
  let sum = 0;
  const numberWordsRegex =
    /(one|two|three|four|five|six|seven|eight|nine|\d)/gi;
  const numberWordsToDigit = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  input.forEach((line) => {
    let matches = line.match(numberWordsRegex);

    if (matches && matches.length > 0) {
      let firstMatch = matches[0].toLowerCase();
      let lastMatch = matches[matches.length - 1].toLowerCase();

      firstMatch = isNaN(firstMatch)
        ? numberWordsToDigit[firstMatch]
        : firstMatch;
      lastMatch = isNaN(lastMatch) ? numberWordsToDigit[lastMatch] : lastMatch;

      sum += Number(firstMatch + lastMatch);
    }
  });
  return sum;
}

// Reading input and executing the function
const filePath = path.join(__dirname, "..", "InputDayOne.txt");
const input = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
console.log("Part 2 Solution:", calculateSumPart2UsingRegex(input));

module.exports = calculateSumPart2UsingRegex;
