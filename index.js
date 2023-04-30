//CHAPTER 21-25
//QUESTION NO 2
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

///////////////////////////////////////////////////

//QUESTION NO 3
var phoneModel = prompt("What is your favorite mobile phone model?");
var inputLength = phoneModel.length;
document.write("The length of your input is " + inputLength + " characters.");

////////////////////////////////////////////

//QUESTION NO 4
var word = "Pakistani";
var nIndex = word.indexOf("n");
document.write("The index of the letter 'n' in the word 'Pakistani' is " + nIndex + ".");

/////////////////////////////////////////////////////////////

//QUESTION NO 5
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("The last index of the letter 'l' in the word 'Hello World' is " + lastIndex + ".");

///////////////////////////////////////////

//QUESTION NO 6
var word = "Pakistani";
var char = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is '" + char + "'.");

///////////////////////////////////////////////

//QUESTION NO 7
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

///////////////////////////////////////////////////////////

//QUESTION NO 8
var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write("The new word after replacing 'Hyder' with 'Islam' is '" + newWord + "'.");

///////////////////////////////////////////////////

//QUESTION NO 9
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("The new message after replacing all occurrences of 'and' with '&' is:<br>" + newMessage);

///////////////////////////////////////////////////////

//QUESTION NO 10
var stringNumber = "472";
var number = Number(stringNumber);
document.write("The string value '" + stringNumber + "' is converted to the number value " + number + ".<br>");
document.write("The type of the number value " + number + " is " + typeof number + ".");

////////////////////////////////////////////////////////


//QUESTION NO 11
var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
alert("The input in capital letters is: " + uppercaseInput);

///////////////////////////////////////////////////

//QUESTION NO 12
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("The converted string is: " + str);

////////////////////////////////////////////////////

//QUESTION NO 13
var username = prompt("Enter a username:");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  alert("Please enter a valid username without any special symbols.");
} else {
  alert("Username saved: " + username);
}

////////////////////////////////////////////////////

//QUESTION NO 14
var password = prompt("Enter a password:");
if (password.length < 6) {
  alert("Password should be at least 6 characters long.");
} else if (!/^[a-zA-Z]/.test(password)) {
  alert("Password should not start with a number.");
} else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
  alert("Password should contain alphabets and numbers.");
} else {
  alert("Password is valid.");
}

/////////////////////////////////////////////////

//QUESTION NO 16
var university = "University of Karachi";
var arr = university.split(" ");
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}

///////////////////////////////////////////////////

//QUESTION NO 17
var input = prompt("Enter a string:");
var lastChar = input.charAt(input.length - 1);
document.write("The last character is: " + lastChar);

///////////////////////////////////

//QUESTION NO 18
var str = "The quick brown fox jumps over the lazy dog";
var word = "the"; count = 0;
var words = str.split(" ");
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === word.toLowerCase()) {
    count++;
  }
}
document.write("The word '" + word + "' appears " + count + " times.");

/////////////////////////////////////////////
////////////////////////////////////////

//CHAPTER NO 26-30

//QUESTION NO 3
var num = -4; 
var absoluteValue = Math.abs(num);
console.log(`The absolute value of ${num} is ${absoluteValue}.`);

/////////////////////////////////////////////

//QUESTION NO 4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice is: " + diceValue);

//////////////////////////////////////////

//QUESTION NO 5
var randomNum = Math.random();
var coinResult = (randomNum < 0.5) ? "Heads" : "Tails";
alert("The coin landed on " + coinResult);

////////////////////////////////////////////////

//QUESTION NO 6
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum);

////////////////////////////////////////////

//QUESTION NO 7
var weight = prompt("Enter your weight in kilograms");
weight = weight.replace(/[^\d\.]/g, '');
weight = parseFloat(weight);
document.write("Your weight is " + weight + " kilograms.");

/////////////////////////////////

//QUESTION NO 8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = parseInt(prompt("Guess a number between 1 and 10:"));
if (guess === secretNumber) {
  alert("Congratulations, you guessed the secret number!");
}
 else {
  alert("Sorry, your guess is incorrect. The secret number was " + secretNumber + ".");
}

//////////////////////////////////////////////










 
