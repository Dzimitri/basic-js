const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''; 
  let count = 1; 

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++; // если следующий символ такой же, увеличиваем счетчик
    } else {
      result += (count > 1 ? count : '') + str[i]; // если символы разные, добавляем результат
      count = 1; // сброс счетчика
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
