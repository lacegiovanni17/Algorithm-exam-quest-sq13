//Challemge: create a love calculator, essentially the way it works is that you enter two names of persons
// the calculator will return a number between 1 and 100 to indicate the percentage chance of the love
// working out between the two said names of persons
// P.S- here we will completely ignore the names of the persons and the random number should be generated
// in the form of an alert telling them their love score.

prompt("What is your name?");
prompt("What is their name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      " You love each other like Kanye loves Kanye."
  );
} else {
  alert("Your love score is " + loveScore + "%");
}
