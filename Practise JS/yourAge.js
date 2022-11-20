// Challenge: LIFE IN WEEKS CODING EXERCISE
// I was reading this article by Tim Urban - Your Life in Weeks and realized just how little time we actually have.
//In this challenge, you are going to create a function
//that tells us how many days, weeks and months we have left if we live until 90 years old.
//It will take your current age as the input and console.logs a message with our time left in this format:
//You have x days, y weeks, and z months left.
//Where x, y and z are replaced with the actual calculated numbers.
//For this challenge, assume there are 365 days in a year,
//52 weeks in a year and 12 months in a year.
//IMPORTANT your console.log output should match the
//Example Output format exactly, even the positions of the commas and full stops.
//Example Input
//e.g. If you are 56 years old:
//lifeInWeeks(56)
// Example Output
// You have 12410 days, 1768 weeks, and 408 months left.

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.]
  let daysinYear = age * 365;
  let weeksinYear = age * 52;
  let monthsinYear = age * 12;

  let days90 = 90 * 365;
  let weeks90 = 90 * 52;
  let months90 = 90 * 12;

  let daysLeft = days90 - daysinYear;
  let weeksLeft = weeks90 - weeksinYear;
  let monthsLeft = months90 - monthsinYear;

  console.log(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months left."
  );

  /*************Don't change the code below**********/
}

lifeInWeeks(51);

// You can alternatively write a different funtcion

function lifeinWeeks(age) {
  let yearsRemaining = 90 - age;
  let days = yearsRemaining * 365;
  let weeks = yearsRemaining * 52;
  let months = yearsRemaining * 12;
  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}

lifeinWeeks(21);
