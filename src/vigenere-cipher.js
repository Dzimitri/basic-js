const { NotImplementedError } = require('../extensions/index.js');

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
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'decrypt');
  }

  process(message, key, method) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).slice(0, message.length);

    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }
      const letterIndex = method === 'encrypt'
        ? (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) % 26
        : (alphabet.indexOf(message[i]) - alphabet.indexOf(key[j]) + 26) % 26;
      result += alphabet[letterIndex];
      j++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
