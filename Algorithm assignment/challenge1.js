function secondLargest(arr) {
  let properArr = arr.sort(function (a, b) {
    return a - b;
  });
  let newNum = properArr.reverse();
  return newNum[1];
}
module.exports = secondLargest;

//© 2022 Chidike Solution