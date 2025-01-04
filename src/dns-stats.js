const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}; // пустой объект для хранения результата

  for (const domain of domains) {
    const parts = domain.split('.').reverse(); // разделяется домен на части и переворачивается порядок

    let dns = ''; // переменная для накопления DNS-имен

    for (const part of parts) {
      dns += `.${part}`; // добавляем текущую часть к DNS

      // если такой DNS уже есть в объекте, увеличиваем счетчик
      // если нет, то инициализируем его значением 1
      result[dns] = (result[dns] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
