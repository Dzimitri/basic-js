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
  const repeatTimes = options.repeatTimes || 1; // количество повторений строки
  const separator = options.separator || '+'; // разделитель между строками
  const addition = options.addition !== undefined ? String(options.addition) : ''; // добавляемая строка
  const additionRepeatTimes = options.additionRepeatTimes || 1; // количество повторений добавления
  const additionSeparator = options.additionSeparator || '|'; // разделитель для добавления

  const additionPart = new Array(additionRepeatTimes).fill(addition).join(additionSeparator); // формируем добавляемую строку
  return new Array(repeatTimes).fill(str + additionPart).join(separator); // формируем итоговую строку
}

module.exports = {
  repeater
};
