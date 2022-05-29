const toUpper = require('../lib/string/toUpper');

describe("Teste de manipulamento de texto", () => {
  test('Primeira letra maiúscula', () => {
    expect(toUpper('aaaa')).toBe('Aaaa');
  });

  test('Todas maiúscula', () => {
    expect(toUpper('AAAA')).not.toBe('aaaa');
  });

  test('Nenhuma maiúscula', () => {
    expect(toUpper('aaaa')).not.toBe('aaaa');
  });
});