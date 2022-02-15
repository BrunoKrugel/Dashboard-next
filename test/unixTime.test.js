const unixToStamp = require('../lib/unixTime');

test('adds 1 + 2 to equal 3', () => {
  expect(unixToStamp('1644564141')).toBe('1644564141');
});