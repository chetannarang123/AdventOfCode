const fs = require("fs");
const path = require("path");

function calculateSumPart1UsingRegex(input) {
  let sum = 0;
  input.forEach((line) => {
    let firstDigitMatch = line.match(/\d/); // Find first digit
    let lastDigitMatch = line.match(/\d/g); // Find all digits

    if (firstDigitMatch && lastDigitMatch) {
      let firstDigit = firstDigitMatch[0];
      let lastDigit = lastDigitMatch[lastDigitMatch.length - 1];

      sum += Number(firstDigit + lastDigit);
    }
  });
  return sum;
}

// Reading input and executing the function
const filePath = path.join(__dirname, "..", "InputDayOne.txt");
const input = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
console.log("Part 1 Solution:", calculateSumPart1UsingRegex(input));

module.exports = calculateSumPart1UsingRegex;
