const {
    validateUvIndex
} = require('../../lib/validations/uvIndex');

test('Validate perfect UV index', () => {
    expect(validateUvIndex(0).severity).toEqual("info");
});