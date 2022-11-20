function filterArray(arr) {
  let onlyNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      onlyNums.push(arr[i]);
    }
  }
  return onlyNums;
}

module.exports = filterArray;


//© 2022 Chidike Solution