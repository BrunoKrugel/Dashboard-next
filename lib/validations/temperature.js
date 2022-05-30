function validateTemperature(temperature) {
  if (temperature < 20)
    return {
      temperature: {
        severity: 'warning',
        message: 'Temperatura está abaixo do ideal para o cultivo de alface.',
      },
    };
  if (temperature > 25)
    return {
      temperature: {
        severity: 'warning',
        message: 'Temperatura está acima do ideal para o cultivo de alface.',
      },
    };
  return {
    temperature: {
      severity: 'info',
      message: 'Temperatura está ideal.',
    },
  };
}
module.exports.validateTemperature = validateTemperature;
