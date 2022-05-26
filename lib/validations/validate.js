const {
  validateAirHumidity
} = require('./airHumidity');
const {
  validateUvIndex
} = require('./uvIndex');
const {
  validateTemperature
} = require('./temperature');

function cleanValidations(validations) {
  //TODO has to use [0]
  if (validations.humidity.severity == 'info') {
    delete validations.humidity;
  }
}
module.exports.cleanValidations = cleanValidations;


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