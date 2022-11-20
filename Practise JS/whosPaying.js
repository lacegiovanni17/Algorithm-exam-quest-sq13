// Who's Buying Lunch? Code Challenge: You are going to write a function which
//will select a random name from a list of names.The person selected will have to pay for everybody's food bill.
// Important: The output should e returned from the function
//and you do not need alert, prompt or console.log.The output
//should match the example output exactly, including capitalization and punctuation.
// Example Input
// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output
// Michael is going to buy lunch today!

function whosPaying(names) {
  let numberOfPeople = names.length;
  let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  let randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today!";
}
