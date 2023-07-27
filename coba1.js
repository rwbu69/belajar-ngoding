function countLetterOccurrences(inputString) {
  // Convert the string to lowercase to treat uppercase and lowercase letters as the same.
  inputString = inputString.toLowerCase();

  // Initialize an empty object to store letter counts.
  const letterCounts = {};

  // Loop through each character in the string.
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    // Check if the character is a letter (ignore non-letter characters).
    if (isLetter(char)) {
      // If the letter is already in the object, increment its count.
      if (letterCounts[char]) {
        letterCounts[char]++;
      } else {
        // If the letter is not in the object, add it with a count of 1.
        letterCounts[char] = 1;
      }
    }
  }

  return letterCounts;
}

// Function to check if a character is a letter.
function isLetter(char) {
  return (char >= 'a' && char <= 'z');
}

// Function to compare the concurrence of letters in two strings.
function compareLetterConcurrence(string1, string2) {
  const letterOccurrences1 = countLetterOccurrences(string1);
  const letterOccurrences2 = countLetterOccurrences(string2);

  console.log("Concurrence of letters in String 1:", letterOccurrences1);
  console.log("Concurrence of letters in String 2:", letterOccurrences2);

  // Check if the letter occurrences are the same in both strings.
  const keys1 = Object.keys(letterOccurrences1);
  const keys2 = Object.keys(letterOccurrences2);

  if (keys1.length !== keys2.length) {
    console.log("The concurrence of letters in both strings is different.");
    return;
  }

  for (const key of keys1) {
    if (letterOccurrences1[key] !== letterOccurrences2[key]) {
      console.log("The concurrence of letters in both strings is different.");
      return;
    }
  }

  console.log("The concurrence of letters in both strings is the same.");
}

// Example usage:
const string1 = "hello";
const string2 = "olelh";
compareLetterConcurrence(string1, string2);
