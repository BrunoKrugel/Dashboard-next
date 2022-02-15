const unixToStamp = require('../lib/unixTime');

//https://www.epochconverter.com/
test('Test Unix time converter', () => {
  expect(unixToStamp(1644915922)).toBe('09:05');
});