function validateRain(weather) {
    let rain = 0
    for (let i = 0; i < weather.length; i++) {
        if ((weather[i].weather[0].main).toLowerCase().includes('rain')) rain++;
        if (rain >= 3) return {
            Rain: {
                severity: 'warning',
                message: 'Quantidade de chuvas acima do ideal.',
            }
        };
    }
    return {
        Rain: {
            severity: 'info',
            message: 'Quantidade de chuva para as hortas é ideal.',
        }
    };
}
module.exports.validateRain = validateRain;


function validateSun(weather) {
    return true;
}
module.exports.validateSun = validateSun;