// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword() {

  //The Password Value
  let passValue = [];
  
  //Check the Checkedbox. 
  var checkBox = document.getElementById('inlineCheckbox1');
      console.log(checkBox.checked);

  var checkBox2 = document.getElementById('inlineCheckbox2');
      console.log(checkBox2.checked);
  
  var checkBox3 = document.getElementById('inlineCheckbox3');
      console.log(checkBox3.checked);
    
  var checkBox4 = document.getElementById('inlineCheckbox4');
      console.log(checkBox4.checked);
  
  //Password Values 
    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", ",", "<", ">", ".", "?", "/", ";", ":", "[", "]", "{", "}"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //the changing array
  let allChars = [];
  

  //Concat The arrays

  if(checkBox.checked){
    allChars = allChars.concat(specialChars);
  }
  if (checkBox2.checked) {
    allChars = allChars.concat(numbers);
  }
  if(checkBox3.checked){
    allChars = allChars.concat(upperLetters);
  }
  if (checkBox4.checked) {
    allChars = allChars.concat(lowerLetters);
  }

  // if(checkBox.checked && checkBox2.checked){
  //   let specialNum = specialChars.concat(numbers);
  //   console.log("Yay!");
  //  }
  // else{
  //   console.log("Oh No!");
  // }
  // if(checkBox2.checked && checkBox3.checked){
  //   let upperNum = numbers.concat(upperLetters);
  //   console.log("Yay!");
  // }
  // else{
  //   console.log("Oh No!");
  // }
  // if(checkBox3.checked && checkBox4.checked){
  //   let upperLower = upperLetters.concat(lowerLetters);
  //   console.log("Yay!");
  //  }
  // else{
  //   console.log("Oh No!");
  // }
  // if(checkBox4.checked){
  //   console.log("Yay!");
  // }
  // else{
  //   console.log("Oh No!");
  // }


console.log(upperLetters[0]);

var passwordValue = upperLetters.concat(lowerLetters);

console.log(passwordValue);
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
