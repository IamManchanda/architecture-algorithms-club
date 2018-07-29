// Solution 1
const reverse = function (str) {
  return str // Returns original string
    .split('') // Split that original string into an array of substrings, and return a new array. [1]
    .reverse() // Reverses that array in place. [2]
    .join(''); // Joins all elements of an array into a string. [3]
};

/*
************* Modern Implicit Solution! *************
const reverse = (str) => str.split('').reverse().join('');

************* Reference Sources *************
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[3] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/


module.exports = reverse;
