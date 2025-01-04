const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;

  // проходим по каждой строке матрицы
  for (let row of matrix) {
    // проходим по каждому элементу в строке
    for (let item of row) {
      if (item === '^^') { // если элемент равен "^^" счетчик увеличивается
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
