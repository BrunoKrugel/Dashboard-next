const unixToStamp = require('../lib/unixTime');

//https://www.epochconverter.com/
test('Test Unix time converter', () => {
  expect(unixToStampUTC(1644915922, 'BR')).toBe('09:05');
});