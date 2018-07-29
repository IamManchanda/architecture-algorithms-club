// Solution 3
const reverse = function (str) {
  return str // Returns original string
    .split('') // Split that original string into an array of substrings, and return a new array. [1]
    .reduce(function (reversed, currentCharacter) {
      /**
      * Create a `reduce() `method which applies a function against an accumulator `reversed` (which starts 
      * with an empty value) and each element `currentCharacter` in the array `str.split('')` will be reduced  
      * with a single value with a return statement of `${currentCharacter}${reversed}` for each iteration. [2]
      */
      return `${currentCharacter}${reversed}`;
    }, '');
};

/*
************* Modern Implicit Solution! *************
const reverse = (str) => str.split('').reduce((reversed, currentCharacter) => `${currentCharacter}${reversed}`, '');

************* Reference Sources *************
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

module.exports = reverse;
