const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.#process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.#process(encryptedMessage, key, false);
  }

  #process(text, key, isEncrypt) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = text.toUpperCase();
    const keyword = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const char = msg[i];

      if (char >= 'A' && char <= 'Z') {
        const shift = keyword[keyIndex % keyword.length].charCodeAt(0) - 65;
        const code = char.charCodeAt(0) - 65;
        const newCode = isEncrypt
          ? (code + shift) % 26
          : (code - shift + 26) % 26;

        result += String.fromCharCode(newCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
