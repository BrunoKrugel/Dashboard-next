const {
    validateWind
} = require('../../lib/validations/wind');

test('Validate perfect wind speed', () => {
    expect(validateWind(0).wind.severity).toEqual("info");
});

test('Validate warning wind speed', () => {
    expect(validateWind(60).wind.severity).toEqual("warning");
});

test('Validate danger wind speed', () => {
    expect(validateWind(100).wind.severity).toEqual("error");
});