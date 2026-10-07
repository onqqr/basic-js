const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let numMax = 0;

  for (let i = 0; i < digits.length; i++) {
    const digits2 = digits.slice();
    digits2.splice(i, 1);
    const num = parseInt(digits2.join(''), 10);

    if (num > numMax) {
      numMax = num;
    }
  }
  return numMax;
}

module.exports = {
  deleteDigit
};
