// Solution to the 99 Bottles Challenge: This is one of the ways you could have solved the
//challenge using a while loop.There are many others, as long as you achieve the desired outcome -
//printing the lyrics to the 99 bottles of beer song - then you are successful!
//If you've come up with a fancy solution or something different, be sure to share it in the
//Q & A section for other students to learn from!

let numberOfBottles = 99;
while (numberOfBottles >= 0) {
  let bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
