const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // переделываем вторую строку в массив, чтобы удалять символы по мере нахождения общих
  let s2Array = s2.split('');
  let count = 0; // счетчик символов

  for (let char of s1) {
    // проверка, есть ли текущий символ в массиве второй строки
    let index = s2Array.indexOf(char);
    if (index !== -1) {
      // если символ найден, увеличивается счетчик
      count++;
      // удаляется символ из массива второй строки, чтобы избежать двойного учета
      s2Array.splice(index, 1);      
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
