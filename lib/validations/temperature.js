function validateTemperature(temperature) {
    if (temperature < 20)
      return {
        severity: 'warn',
        message: 'Temperatura esta abaixo do ideal para o cultivo de alface.',
      };
    if (temperature > 25)
      return {
        severity: 'warn',
        message:
          'Temperatura esta acima do ideal para o cultivo de alface.',
      };
    return {
      severity: 'info',
      message: 'Temperatura esta ideal.',
    };
  }
  module.exports.validateTemperature = validateTemperature;
  