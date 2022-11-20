function squareDigit(str) {
  let x = Number(
    str
      .split("")
      .map((i) => {
        return i * i;
      })
      .join("")
  );
  return x;
}
module.exports = squareDigit;
