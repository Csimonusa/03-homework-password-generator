var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

generateBtn.addEventListener("click", writePassword)

var specialCharaters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var minLength = 8

var maxLength = 128

function generatePassword() {

  var Length = prompt("Enter the length of your password.")

if(Length < minLength || Length > maxLength) {

  alert("Please pick a number between 8 and 128.")

} else {

    var hasSpecialCharacters = confirm("Would you like to include special characters?")

    var hasNumbers = confirm("Would you like to include numbers?")

    var hasLowerCase = confirm("Would you like to include lower case letters?")

    var hasUpperCase = confirm("Would you like to include upper case letters?")

    if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialCharacters) {

      alert("Please choose at least one character type.")

    }   
  }
}