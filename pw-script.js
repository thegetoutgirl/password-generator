// Assignment Code
var generate = document.querySelector("#generate");

// //prompt and confirm arrays
// var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
// var numArr = ["1","2","3","4","5","6","7","8","9","0"];
// var specArr = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Create the function to generate the password
function generatePassword(){        
  console.log("clicked")

  var randomPassword = "";
  var include = "";
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialChar = '!#$%&*+-<=>?@^_~';
  var numberChar = '0123456789';
  
  // Password Length variable & prompt
  var length = getLength();
    console.log(length + " characters");      
  
  // Lowercase & Uppercase variable & prompt
  var isLower = getLower();
  if(isLower) {
    include = include.concat(lowerChar);
  }
  console.log("Updated length " + include.length);

  var isUpper = getUpper();
  if(isUpper) {
    include = include.concat(upperChar);
  }
  console.log("Updated length: " + include.length);
  
  // Number variable & prompt
  var isNumber = getNumbers();
  if(isNumber){
    include = include.concat(numberChar);
  }
  console.log("Updated length " + include.length);

  // Special Characters variable
  var isSpecial = getSpecial();
  console.log("If true, include special characters: " + isSpecial);
    if(isSpecial){
    include = include.concat(specialChar);
    console.log("Updated length: " + include.length);
    console.log("Total length: " + include);
    }
  // generate password

// loop through the password length
  for (var i=0; i<length; i++) {                                                
    var randNum = Math.floor(Math.random() * include.length);
    randomPassword += include.substring(randNum,randNum+1);
  }

  console.log("The password is: " + randomPassword);
  return randomPassword;
  
}
// Write Password

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Prompt to ask for length 
function getLength(){
  var inputLength = prompt("Choose a password between 8 and 128 characters (type a number)");
  console.log("This is user chosen input : " + inputLength);
  
  if (inputLength <= 8 || inputLength >= 128) {
    alert("Please type a number between 8 and 128!");
    return getLength();
  } else {
    return inputLength;
  }
};

// User inputs

function getSpecial(){
  var inputSpecial = confirm("Do you want special characters?");
  return inputSpecial;
};

function getLower(){
  var inputLower = confirm("Do you want lowercase letters?");
  return inputLower;
};

function getUpper() {
  var inputUppercase = confirm("Do you want uppercase letters?");
  return inputUppercase;
};

  function getNumbers() {
    var inputNumber = confirm("Do you want to include numbers from 0 to 9?");
    return inputNumber;
};

// // Add event listener to generate button. Not working?? What am I missing?
generate.addEventListener("click", writePassword);
  console.log("Bueller??")