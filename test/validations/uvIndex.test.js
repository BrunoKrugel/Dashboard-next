const {
    validateUvIndex
} = require('../../lib/validations/uvIndex');

test('Validate perfect UV index', () => {
    expect(validateUvIndex(0).uvIndex.severity).toEqual("info");
});