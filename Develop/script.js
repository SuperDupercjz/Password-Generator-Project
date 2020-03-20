// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passWordLenght = prompt("Please Choose a Password length from 8-128?")
  var passWordLowerCase = confirm("Is It Okay to put Lowercases in your Password?")
  var passWordUpperCase = confirm("Is It Okay to put Uppercases in your Password?")
  var passWordNum = confirm("Is it okay to have  numeric Values?")
  var passWordSpecialCharacters = confirm("Is It Okay to put special characters in your Password?")

  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var passWordSpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  var passWord = ""
  if (passWordLenght > 8 && passWordLenght < 128) {
    if (passWordLowerCase && passWordUpperCase && passWordNum && passWordSpecialCharacters) {
      for (i = 0; i < passWordLenght; i++) {
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)]
        passWord = passWord + [Math.floor(Math.random() * 9)];
        passWord = passWord + passWordSpecialCharacters[Math.floor(Math.random() * passWordSpecialCharacters.length)];
      }
    }
    if (passWordLowerCase && passWordUpperCase && passWordNum) {
      for (i = 0; i < passWordLenght; i++) {
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
        passWord = passWord + [Math.floor(Math.random() * 9)];
      }
    }
    if (passWordLowerCase && passWordUpperCase) {
      for (i = 0; i < passWordLenght; i++) {
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
      }
    }
    if (passWordLowerCase) {
      for (i = 0; i < passWordLenght; i++) {
        passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
  console.log(passWord)
  return passWord;

}
