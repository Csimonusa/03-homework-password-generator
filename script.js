//starter code
var generateBtn = document.querySelector("#generate")

function writePassword() {

  var password = generatePassword()

  var passwordText = document.querySelector("#password")

  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword)
//starter code end

var specialCharaters = ["@%+\\/'!#$^?:,)(}{][~-_."]

var numericCharacters = ["0123456789"]

var lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"]

var upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

var minLength = 8

var maxLength = 128

var combine = ""

function generatePassword() {

  var passwordLength = prompt("Enter the length of your password.", "between 8 and 128 characters")
  console.log(passwordLength)

  var combine = ""

if(passwordLength < minLength || passwordLength > maxLength) {

  alert("Please pick a number between 8 and 128.")
  return "please try again!"

} else {

    var hasSpecialCharacters = confirm("Would you like to include special characters?")
    console.log("hasSpecialCharacters", hasSpecialCharacters)

    var hasNumbers = confirm("Would you like to include numbers?")
    console.log("hasNumbers", hasNumbers)

    var hasLowerCase = confirm("Would you like to include lower case letters?")
    console.log("hasLowerCase", hasLowerCase)

    var hasUpperCase = confirm("Would you like to include upper case letters?")
    console.log("hasUpperCase", hasUpperCase)

    if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialCharacters) {

      alert("Please choose at least one character type.")
      return "please try again!"

    }
    if (hasSpecialCharacters) {
      combine += specialCharaters
    }
    if (hasNumbers) {
      combine += numericCharacters
    }
    if (hasLowerCase) {
      combine += lowerCasedCharacters
    }
    if (hasUpperCase) {
      combine += upperCasedCharacters
    }

    console.log(combine)

    var result = ""

    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * combine.length)
      
      result += combine[random]
    }

    console.log(result)

    return result
  }
}
