function validateAirHumidity(value) {
  if (value < 50)
    return {
      severity: 'warn',
      message: 'Low humidity favors an outer leaf edge burn.',
    };
  if (value > 70)
    return {
      severity: 'warn',
      message:
        'High humidity favors powdery mildew, Botrytis and physiological disorder tip burn.',
    };
  return true;
}
module.exports.validateAirHumidity = validateAirHumidity;
