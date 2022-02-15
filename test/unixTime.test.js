const { unixToStampUTC, currentTimeZone } = require('../lib/unixTime');

//https://www.epochconverter.com/
test('Test Unix time converter in UTC', () => {
  expect(unixToStampUTC(1644915922, 'BR')).toBe('09:05');
});

test('Test Unix time converter in Current Time zone', () => {
  expect(currentTimeZone(1644915922, 'BR', 'Canoas')).toBe('06:05');
});