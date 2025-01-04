const { NotImplementedError } = require('../extensions/index.js');

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
  // преобразуется число в строку
  const strNum = n.toString();

  // переменная для хранения максимального числа
  let maxNumber = 0;

  // проходим по каждой цифре в строке
  for (let i = 0; i < strNum.length; i++) {
    // удаляем текущую цифру, создавая новую строку без нее
    const numberWithoutDigit = strNum.slice(0, i) + strNum.slice(i + 1);

    // преобразуем полученную строку обратно в число
    const currentNumber = parseInt(numberWithoutDigit, 10);

    // сравниваем с текущим максимумом и обновляем, если нужно
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
