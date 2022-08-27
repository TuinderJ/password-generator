// Assignment Code
var generateBtn = document.querySelector("#generate");

function rng(numberOfItems) {return Math.floor(Math.random() * numberOfItems);}

function generatePassword() {
  let password = '';
  let options = {};
  options.length = prompt('What is the length of the password you would like?');
  if (options.length === null || options.length == 0) {return password};
  if (confirm('Would you like the password to use lowercase characters?')) {options.lowercase = true};
  if (confirm('Would you like the password to use uppercase characters?')) {options.uppercase = true};
  if (confirm('Would you like the password to use numbers?')) {options.numbers = true};
  if (confirm('Would you like the password to use special characters?')) {options.specialCharacters = true};
  if (!options.lowercase && !options.uppercase && !options.numbers && !options.specialCharacters) {return password};
  let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+'];
  let validOptions = [];
  for (let key in options) {validOptions.push(key)}
  for (let i = 0; i < options.length; i++) {
    let option = validOptions[rng(validOptions.length - 1) + 1];
    if (option === 'lowercase') {password += characters[rng(characters.length)]};
    if (option === 'uppercase') {password += characters[rng(characters.length)].toUpperCase()};
    if (option === 'numbers') {password += rng(10)};
    if (option === 'specialCharacters') {password += specialCharacters[rng(specialCharacters.length)]};
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
