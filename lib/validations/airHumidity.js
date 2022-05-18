function validateAirHumidity(value) {
  if (value < 50)
    return {
      humidity: {
        severity: 'warn',
        message: 'Low humidity favors an outer leaf edge burn.',
      }
    };
  if (value > 70)
    return {
      humidity: {
        severity: 'warn',
        message: 'High humidity favors powdery mildew, Botrytis and physiological disorder tip burn.',
      }
    };
  return {
    humidity: {
      severity: 'info',
      message: 'Air humidity is ideal for the plant.',
    }
  };
}
module.exports.validateAirHumidity = validateAirHumidity;