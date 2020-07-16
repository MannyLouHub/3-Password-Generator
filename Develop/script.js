// Assignment Code
var generateBtn = document.querySelector("#generate");


//How many characters

var slider = document.getElementById("formControlRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.value = this.value;
}

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
  var numbers = [..."1234567890"];
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var lowerLetters = [...letters];
  var upperLetters = [...letters.toUpperCase()];
  
  //the changing array
  let allChars = [];


  //Concat The arrays

  if (checkBox.checked) {
    allChars = allChars.concat(specialChars);
  }
  if (checkBox2.checked) {
    allChars = allChars.concat(numbers);
  }
  if (checkBox3.checked) {
    allChars = allChars.concat(upperLetters);
  }
  if (checkBox4.checked) {
    allChars = allChars.concat(lowerLetters);
  }

  //Making sure value is checked 

  if (allChars.length === 0) {
    alert("You must select a Password Criteria")
    return;
  }

  //display results

  let genPass = "";

  for (let i = 0; i < slider.value; i++) {
    genPass += allChars[Math.floor(Math.random() * allChars.length)];
    console.log(genPass);
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = genPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
