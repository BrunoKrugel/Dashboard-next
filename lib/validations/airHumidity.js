function validateAirHumidity(value) {
  if (value < 50)
    return {
      humidity: {
        severity: 'warning',
        message: 'Baixa umidade, pode ocorrer queimadura e endurecimento das folhas.',
      },
    };
  if (value > 70)
    return {
      humidity: {
        severity: 'warning',
        message:
          'Alta umidade, risco de surgimento de fungos (Oídio) e queimadura das folhas.',
      },
    };
  return {
    humidity: {
      severity: 'info',
      message: 'Air humidity is ideal for the plant.',
    },
  };
}
module.exports.validateAirHumidity = validateAirHumidity;
