const { addDays } = require('../lib/dates/dates');

describe('Teste de manipulamento de datas', () => {
  test('Soma de datas', () => {
    expect(addDays(new Date(2020, 4, 21), 1)).toBe('22/4');
  });
});
