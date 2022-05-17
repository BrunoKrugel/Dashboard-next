const {
  validateAirHumidity
} = require('../../lib/validations/airHumidity');

test('Validate perfect humidity', () => {
  expect(validateAirHumidity(60)).toBe(true);
});

test('Validate wrong temperature', () => {
  expect(validateAirHumidity(0).severity).toEqual("warn");
});