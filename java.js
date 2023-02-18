// JavaScript code for counting with a timed delay
let count = 1;
let arr = [];

let timerId = setInterval(function () {
  arr.unshift(count);
  if (arr.length > 9) {
    arr.pop();
  }
  console.log(arr);
  count++;
  if (count > 10) {
    clearInterval(timerId);
  }
}, 1000);
