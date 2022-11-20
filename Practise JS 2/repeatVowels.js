// Challenge: INSTRUCTION- write a function that repeats every vowel in a string by a given factor. Here is the specification
//for the repeatVowels function you would complete.
//      repeatVowels(word, multiplier)
//parameters ~  word: string - Thr string that should have all its vowels repeated.
//             multiplier: Number - Thr number of times to repeat each vowel
//Return Value ~ String - the new string with all its vowels repeated.
//Constraints ~         1 <= multiplier <= 50
//  Examples
// word         multiplier              ReturnValue
//"help"            5                   "heeeeelp"
//"dancer"          1                   "dancer"
//"decadev"         2                   "deecaadeev"
//
//Useful method:        ''.repeat(n)        - Repeats the string n times

function repeatVowel(word, multiplier) {
  const knownVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let repeatedWord = " ";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (knownVowels.includes(letters)) {
      repeatedWord += letter.repeat(multiplier);
    } else {
      repeatedWord += letter;
    }
  }
  return repeatedWord;
}
