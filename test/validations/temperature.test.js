const {
    validateTemperature
} = require('../../lib/validations/temperature');

test('Validate perfect temperature', () => {
    expect(validateTemperature(23).temperature.severity).toEqual("info");
});

test('Validate wrong temperature', () => {
    expect(validateTemperature(15).temperature.severity).toEqual("warn");
});