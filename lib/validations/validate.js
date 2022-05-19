const {
  validateAirHumidity
} = require('./airHumidity');
const {
  validateUvIndex
} = require('./uvIndex');
const {
  validateTemperature
} = require('./temperature');



function validateWeather(weatherInfo) {
  const validations = [];
  validations.push(validateAirHumidity(weatherInfo.airHumidity));
  validations.push(validateUvIndex(weatherInfo.uvIndex));
  validations.push(validateTemperature(weatherInfo.temperature));
  //return an Array with all the errors
  return validations;
}
module.exports.validateWeather = validateWeather;

function validateWeek(weekInfo){
  return true
}
module.exports.validateWeek = validateWeek;