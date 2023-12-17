const fs = require("fs");
const path = require("path");

function calculateSumPart1(input) {
  let sum = 0;
  input.forEach((line) => {
    let firstDigit = null,
      lastDigit = null;

    // Find the first digit
    for (let i = 0; i < line.length; i++) {
      if (isDigit(line[i])) {
        firstDigit = line[i];
        break;
      }
    }

    // Find the last digit
    for (let i = line.length - 1; i >= 0; i--) {
      if (isDigit(line[i])) {
        lastDigit = line[i];
        break;
      }
    }

    // Sum if both digits are found
    if (firstDigit !== null && lastDigit !== null) {
      sum += Number(firstDigit + lastDigit);
    }
  });
  return sum;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

// Reading input and executing the function
const filePath = path.join(__dirname, "..", "InputDayOne.txt");
const input = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
console.log("Part 1 Solution:", calculateSumPart1(input));

module.exports = calculateSumPart1;
