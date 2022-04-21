const { addDays } = require('../lib/dates');

test('Sum days', () => {
  expect(addDays(new Date(2020, 4, 21), 1)).toBe('22/4');
});
