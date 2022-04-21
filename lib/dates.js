const toUpper = require('./toUpper');

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.getDate() + '/' + result.getMonth();
}
module.exports.addDays = addDays;

function currentDate() {
  var localDate = new Date();
  let cDay = localDate.getDate();
  let monthName = localDate.toLocaleString('default', { month: 'long' });
  monthName = toUpper(monthName);
  return cDay + ' de ' + monthName;
}
module.exports.currentDate = currentDate;

