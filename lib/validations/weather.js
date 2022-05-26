const {
    weatherCondition
} = require('../string/weatherCondition');

function validateRain(weather) {
    if (weatherCondition(weather, 'rain') >= 3) return {
        Rain: {
            severity: 'warning',
            message: 'Quantidade de chuvas acima do ideal.',
        }
    };
    return {
        Rain: {
            severity: 'info',
            message: 'Quantidade de chuva para as hortas é ideal.',
        }
    };
}
module.exports.validateRain = validateRain;


function validateSun(weather) {
    if (weatherCondition(weather, 'sun') == 7) return {
        Sun: {
            severity: 'warning',
            message: 'Quantidade de sol acima do ideal.',
        }
    };
    return {
        Sun: {
            severity: 'info',
            message: 'Quantidade de sol para as hortas é ideal.',
        }
    };
}
module.exports.validateSun = validateSun;