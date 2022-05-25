const {
    validateTemperature
} = require('../../lib/validations/temperature');

test('Validate perfect temperature', () => {
    expect(validateTemperature(23).temperature.severity).toEqual("info");
});

test('Validate lower temperature', () => {
    expect(validateTemperature(15).temperature.severity).toEqual("warn");
});

test('Validate higher temperature', () => {
    expect(validateTemperature(26).temperature.severity).toEqual("warn");
});