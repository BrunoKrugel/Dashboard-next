const {
  validateAirHumidity
} = require('../../lib/validations/airHumidity');

test('Validate perfect humidity', () => {
  expect(validateAirHumidity(60).humidity.severity).toEqual("info");
});

test('Validate wrong temperature', () => {
  expect(validateAirHumidity(0).humidity.severity).toEqual("warn");
});