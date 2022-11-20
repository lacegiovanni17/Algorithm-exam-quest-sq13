function squareDigit(str) {
    let splitStr = str.split(""); 
    let sqStr = splitStr.map((item, i) =>
        Math.pow(item, 2));
    let newStr = sqStr.join("");
    return newStr;
 
}

console.log();
