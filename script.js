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
var passWord = "";
function generatePassword() {
  var passWordLn = prompt("Please Choose a Password length from 8-128?");
  var passWordLn = parseInt(passWordLn);
  if (typeof passWordLn === "number" && passWordLn > 8 && passWordLn < 128) {
    var passWordLowerCase = confirm("Is It Okay to put Lowercases in your Password?");
    var passWordUpperCase = confirm("Is It Okay to put Uppercases in your Password?");
    var passWordNum = confirm("Is it okay to have  numeric Values?");
    var passWordSpecialCharacters = confirm("Is It Okay to put special characters in your Password?");

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var passWordSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
    passWord = "";
    if (passWordLn > 8 && passWordLn < 128) {
      while (passWord.length < passWordLn) {
        if (passWordLowerCase && passWord.length < passWordLn) {
          passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
        }
        if (passWordUpperCase && passWord.length < passWordLn) {
          passWord = passWord + letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        }
        if (passWordNum && passWord.length < passWordLn) {
          passWord = passWord + Math.floor(Math.random() * 9);
        }
        if (passWordSpecialCharacters === true && passWord.length < passWordLn) {
          passWord = passWord + passWordSpecialChar[Math.floor(Math.random() * passWordSpecialChar.length)];
        }
      }
    }
    console.log(passWord.length);
    console.log(passWordLowerCase + " Lower ");
    console.log(passWordUpperCase + " Upper ");
    console.log(passWordNum + " Num ");
    console.log(passWordSpecialCharacters + " Char ");
    return passWord;
  }else {
    alert("Follow directions");
    generatePassword();
  }
  return passWord;
}