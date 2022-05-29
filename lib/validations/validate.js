const {
  validateAirHumidity
} = require('./airHumidity');
const {
  validateUvIndex
} = require('./uvIndex');
const {
  validateTemperature
} = require('./temperature');
const {
  validateWind
} = require('./wind');
const {
  validateRain,
  validateSun
} = require('./weather');

function validateWeather(weatherInfo) {
  const validations = [];
  validations.push(validateAirHumidity(weatherInfo.airHumidity));
  validations.push(validateUvIndex(weatherInfo.uvIndex));
  validations.push(validateTemperature(weatherInfo.temperature));
  validations.push(validateWind(weatherInfo.wind));
  //return an Array with all the errors
  return validations;
}
module.exports.validateWeather = validateWeather;

function validateWeek(weekInfo){
  const validations = [];
  validations.push(validateRain(weekInfo));
  validations.push(validateSun(weekInfo));
  return validations;
}
module.exports.validateWeek = validateWeek;