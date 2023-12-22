const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const repeat = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addit = typeof options.addition === 'undefined' ? '' : String(options.addition)
  const additRepeat = options.additionRepeatTimes || 1
  const additSeparator = options.additionSeparator || '|'

  let res = ''

  for (let i = 0; i < repeat; i++) {
    res += str

    for (let j = 0; j < additRepeat; j++) {
      res += addit

      if (j < additRepeat - 1) {
        res += additSeparator
      }
    }

    if (i < repeat - 1) {
      res += separator
    }
  }

  return res
}

module.exports = {
  repeater
};
