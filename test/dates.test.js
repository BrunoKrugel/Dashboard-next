const { addDays } = require('../lib/dates');

test('Sum days', () => {
  expect(addDays(new Date(2000,1,1), 1)).toStrictEqual(new Date(2000,1,2));
});
