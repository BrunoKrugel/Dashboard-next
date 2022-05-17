const { validadeAirHumidity } = require('./airHumidity');
const { validadeUvIndex } = require('./uvIndex');


function validateWeather(weatherInfo) {
    validadeAirHumidity(weatherInfo.airHumidity);
    validadeUvIndex(weatherInfo.uvIndex);
    //return an Array with all the errors
  }
  module.exports.validateWeather = validateWeather;