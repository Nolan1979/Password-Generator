// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompt the user for password info

function getUserInput() {

const length = window.prompt("Please enter password length between 8-128 characters");
if (length < 8 || length > 128) {
    alert("Password must be between 8-128 characters");
    
}
  

const lowerCase = window.confirm("Do you want Lower Case Characters?");
if (lowerCase === false) {
  alert("Password must contain Lower Case Characters");
   
}


const upperCase = window.confirm("Do you want Upper Case Characters?");
if (upperCase === false) {
  alert("Password must contain Upper Case Characters");
   
}


const Numeric = window.confirm("Do you want Numeric Characters?");
if (Numeric === false) {
  alert("Password must contain Numeric Characters");
    
}


const Special = window.confirm("Do you want Special Characters?");
if (Special === false) {
  alert("Password must contain Special Characters");
  
}

let password = '';
for(let i = 0; i < length; i++){
  password += getUserLower() + getUserUpper() + getUserNumeric() + getUserSpecial()
  
}
return password.slice(0,length)
}

// Write password to the #password input
function writePassword() {
  var password = getUserInput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Validate users input

function getUserLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUserUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getUserNumeric(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getUserSpecial(){
  const special = "!@#$%^&*"
  return special[Math.floor(Math.random() * special.length)]
  
}







