// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = Number(prompt("How many characters do you want for your password? Note: it must be between 10 and 64"));
  if (passwordLength.length >= 10 && passwordLength.length <= 64) {
    var lowerCase = confirm ("Would you like lowercase letters for your password?");
    var upperCase = confirm ("Would you like uppercase letters for your password?");
    var numericChar = confirm ("Would you like numbers for your password?");
    var specialChar = confirm ("Would you like special characters for your password?");
    var passwordOptions = [lowerCase, upperCase, numericChar, specialChar];
  return passwordOptions;
  } else {
    alert ("Your password length is not up to the required length. Please choose password lenght between 10 and 64!");
  }


}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomPass = "";
  for (var i = 0; i < passwordLength.length; i++) {
    if (lowerCase === true) {
      for (var x of lowerCasedCharacters) {
        randomPass += lowerCasedCharacters.charAt(Math.floor(Nath.random() * lowerCasedCharacters.length));
      }
    } else if (upperCase === true) {
      for (var x of upperCasedCharacters) {
        randomPass += upperCasedCharacters.charAt(Math.floor(Nath.random() * upperCasedCharacters.length));
      }
    }
  }


}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);