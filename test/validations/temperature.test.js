const {
    validateTemperature
} = require('../../lib/validations/temperature');

test('Validate perfect temperature', () => {
    expect(validateTemperature(23).severity).toEqual("info");
});

test('Validate wrong temperature', () => {
    expect(validateTemperature(15).severity).toEqual("warn");
});