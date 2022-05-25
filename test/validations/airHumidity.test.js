const {
  validateAirHumidity
} = require('../../lib/validations/airHumidity');

test('Validate perfect humidity', () => {
  expect(validateAirHumidity(60).humidity.severity).toEqual("info");
});

test('Validate lower temperature', () => {
  expect(validateAirHumidity(0).humidity.severity).toEqual("warn");
});

test('Validate higher temperature', () => {
  expect(validateAirHumidity(80).humidity.severity).toEqual("warn");
});