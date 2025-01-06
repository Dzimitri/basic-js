const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // если параметр отсутствует, возвращаем стандартное сообщение
  if (!date) return 'Unable to determine the time of year!';

  // проверка что объект действительно является экземпляром Date
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  // получаем номер месяца (от 0 до 11)
  const month = date.getMonth();

  // возвращаем время года в зависимости от месяца
  if (month === 11 || month <= 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
}

module.exports = {
  getSeason
};
