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
  var charLength = Number(prompt("How many characters do you want for your password? Note: it must be between 10 and 64"));
  if (charLength == null) {
    return alert("You must enter a password length between 10 and 64"); //Check condition if no password length is entered
  } else if (charLength < 10 || charLength > 64 || isNaN(charLength)) {
    return alert("You must enter a password length between 10 and 64"); //Check to keep password length between 10 and 64
  } else {
    var lowerCase = confirm("Click 'ok' if you would like lowercase letters for your password");
    var upperCase = confirm("Click 'ok' if you would like uppercase letters for your password");    // User prompted to enter various password options
    var numericChar = confirm("Click 'ok' if you would like numbers for your password");
    var specialChar = confirm("Click 'ok' if you would like special characters for your password");
    var characterChoice = [charLength, lowerCase, upperCase, numericChar, specialChar];
    return characterChoice;  // function returns password options chosen by user
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  var index = [Math.floor(Maths.random() * arr.length)];
  return arr[index];

}

    // Function to generate password with user input
    function generatePassword() {
      var passwordOptions = getPasswordOptions();  // calling the getPasswordOption function

      var characterSets = {
        lowerCase: lowerCasedCharacters,
        upperCase: upperCasedCharacters,
        numericChar: numericCharacters,
        specialChar: specialCharacters
      };                  // Array option converted to object

      var password = '';   // Password container created to store generated characters to form password
      var characterSet = characterSets.toString(); // Object of options converted to string
      for (var i = 0; i < passwordOptions[0]; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));   // Looping through character options
      }
      return password;
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