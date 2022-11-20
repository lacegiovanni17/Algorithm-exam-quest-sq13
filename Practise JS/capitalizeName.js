//Challenge: Changing string casing.
//create a var that stores the name that user enters via prompt
// Capitalize the first letter of their name.
// We use the capitalized version of their name to greet them using an alert.

let name = prompt("What is your name?"); 
let firstChar = name.slice(0, 1); 
let upperCaseFirstChar = firstChar.toUpperCase(); 
let restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCse();
let capitalizedName = upperCaseFirstChar + restOfName; 
alert("Hello, " + capitalizedName); 