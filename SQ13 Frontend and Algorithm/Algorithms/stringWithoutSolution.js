function stringWithout(str) {
  let result = "";
  const knownDigits = "0123456789";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!knownDigits.includes(char)) {
      result += char;
    }
  }

  return result;
}

export default stringWithout;
