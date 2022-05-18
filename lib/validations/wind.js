function validateWind(wind) {
  return {
    wind: {
      severity: 'info',
      message: 'Wind is ideal for the plant.',
    }
  };
}
module.exports.validateWind = validateWind;