function countLetterOccurrences(inputString) {
   // Convert the string to lowercase to treat uppercase and lowercase letters as the same.

 
   // Initialize counters for 'x' and 'o'.
   let xCount = 0;
   let oCount = 0;
 
   // Loop through each character in the string.
   for (let i = 0; i < inputString.length; i++) {
     const char = inputString[i];
 
     // Check if the character is 'x' or 'o' (ignore other characters).
     if (char === 'x') {
       xCount++;
     } else if (char === 'o') {
       oCount++;
     }
   }
 
   // Return true if the number of 'x' letters is equal to the number of 'o' letters.
   return xCount === oCount;
 }
 
 // Example usage:
 const inputString = "xoxo";
 const equalXO = countLetterOccurrences(inputString);
 
 console.log("Has equal number of 'x' and 'o'?", equalXO);
 