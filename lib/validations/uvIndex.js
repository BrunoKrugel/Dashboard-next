function validateUvIndex(value) {
  return {
    uvIndex: {
      severity: 'info',
      message: 'UV index is ideal for the plant.',
    }
  };
}
module.exports.validateUvIndex = validateUvIndex;