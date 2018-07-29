// Solution 2
const reverse = function (str) {
  let reversed = ''; // Declare a `reversed` variable and assign an empty value.
  for (const currentCharacter of str) { // Iterate over the string `str` for each charachter with a for..of loop. [1]
    reversed = `${currentCharacter}${reversed}`; // [2]
  }
  return reversed; // Return Reversed string.
};

/*
************* Modern Implicit Solution! *************
const reverse = (str) => {
  let reversed = '';
  for (const currentCharacter of str) reversed = `${currentCharacter}${reversed}`;
  return reversed;
};

************* Reference Sources *************
[1] http://exploringjs.com/es6/ch_for-of.html
[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

module.exports = reverse;
