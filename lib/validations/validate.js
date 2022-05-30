const { validateAirHumidity } = require('./airHumidity');
const { validateUvIndex } = require('./uvIndex');
const { validateTemperature } = require('./temperature');
const { validateWind } = require('./wind');
const { validateRain, validateSun } = require('./weather');

function validateWeather(weatherInfo) {
  return {
    ...validateAirHumidity(weatherInfo.airHumidity),
    ...validateUvIndex(weatherInfo.uvIndex),
    ...validateTemperature(weatherInfo.temperature),
    ...validateWind(weatherInfo.wind),
  };
}
module.exports.validateWeather = validateWeather;

function validateWeek(weekInfo) {
  return {
    ...validateRain(weekInfo.list),
    ...validateSun(weekInfo.list),
  };
}
module.exports.validateWeek = validateWeek;
