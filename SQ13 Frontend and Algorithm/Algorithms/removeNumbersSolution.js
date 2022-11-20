function removeNumbers(str) {
  let result = "";
  const knownDigits = "1234567890";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (knownDigits.includes(char)) {
      result += char;
    }
  }

  return result;
}

export default removeNumbers;
