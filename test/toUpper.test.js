const toUpper = require('../lib/string/toUpper');


test('Test if the first letter is upper case', () => {
  expect(toUpper('aaaa')).toBe('Aaaa');
});

test('Test with all upper case', () => {
  expect(toUpper('AAAA')).not.toBe('aaaa');
});

test('Test to not be lower case', () => {
  expect(toUpper('aaaa')).not.toBe('aaaa');
});