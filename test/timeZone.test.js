const { getTimeZone } = require('../lib/dates/timeZone');

//https://developers.google.com/maps/documentation/timezone/get-started#maps_http_timezone-js
test('Return current timezone', () => {
  expect(getTimeZone(1, 1)).toBe('BR');
});
