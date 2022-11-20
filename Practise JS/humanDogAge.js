// Challenge: create a prompt that asks the user the age of their dog
//Calculate the equivalent human age of the dog using this formula
// humanAge = (dogAge - 2)*4+21
//Give answer back to user through an alert.

let dogAge = prompt("How old is your dog?"); 
let humanAge = ((dogAge - 2) * 4) + 21; 
alert("Your dog is " + humanAge + " years old in human years."); 