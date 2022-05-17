const { validateAirHumidity } = require('./airHumidity');
const { validateUvIndex } = require('./uvIndex');
const { validateTemperature } = require('./temperature');



function validateWeather(weatherInfo) {
    validateAirHumidity(weatherInfo.airHumidity);
    validateUvIndex(weatherInfo.uvIndex);
    validateTemperature(weatherInfo.temperature);
    //return an Array with all the errors
  }
  module.exports.validateWeather = validateWeather;