const fs = require("fs");
const path = require("path");

function findFirstAndLastDigit(inputLine) {
  const numberWords = {
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
  let firstIndex = inputLine.length;
  let lastIndex = -1;
  let firstDigit = "";
  let lastDigit = "";
  // Loop through the inputLine
  for (let i = 0; i < inputLine.length; i++) {
    let char = inputLine[i];
    // Check for single digit
    if (char >= "1" && char <= "9") {
      // Set the firstIndex, firstDigit, and lastIndex if it's the first or last digit found
      if (i < firstIndex) {
        firstIndex = i;
        firstDigit = char;
      }
      lastIndex = i;
      lastDigit = char;
    } else {
      // Check for number words
      for (const [word, digit] of Object.entries(numberWords)) {
        if (inputLine.startsWith(word, i)) {
          let wordEnd = i + word.length - 1;
          if (i < firstIndex) {
            firstIndex = i;
            firstDigit = digit;
          }
          if (wordEnd > lastIndex) {
            lastIndex = wordEnd;
            lastDigit = digit;
          }
        }
      }
    }
  }

  return firstDigit && lastDigit ? parseInt(firstDigit + lastDigit) : 0;
}

function calculateSumPart2(inputs) {
  // Iterate through input lines and calculate sum of first and last digits
  return inputs.reduce(
    (acc, inputLine) => acc + findFirstAndLastDigit(inputLine),
    0
  );
}

// Reading input and executing the function
const filePath = path.join(__dirname, "..", "InputDayOne.txt");
const input = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
console.log("Part 2 Solution:", calculateSumPart2(input));

module.exports = {
  calculateSumPart2,
  findFirstAndLastDigit,
};
