//write funtion to check if a given string can read as the same forward and backward
//make sure it ignores punctuation, spaces and is case insensitive. 
// should Only consider letters and numbers.
    
const palindromes = function (string) {
    //declare a variable to hold all valid characters
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    string = string.toLowerCase()
    let cleaned = "";
    // Loop through every character of the original text
    for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];

    // Check if the current character is inside the valid characters
    if (validCharacters.includes(currentCharacter)) {
      cleaned += currentCharacter; 
    }
    }
    //created a new reverse string to compare and check if the result is true or false
    const reversedString = cleaned.split('').reverse().join('');
    return cleaned === reversedString; 

};
// Do not edit below this line
module.exports = palindromes;
