// Challenge: Try to write a code that is a prompt that asks users what is their name
//and then checks their name against all the names in the array of names in the guest list
//and if does exist it will return "Welcome chann or etc"
// and if the person name is NOT on the guest list it says "Sorry maybe next time".

let guestList = ["Angela", "Jack", "Pan", "Jones", "Lara", "Jason"]; 
let guestName = prompt("What is your name?"); 
if (guestList.includes(guestName)) {
    alert("Welcome!"); 
} else {
    alert("Sorry, maybe next time.");
}
