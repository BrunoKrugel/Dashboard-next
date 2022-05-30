const { validateUvIndex } = require('../../lib/validations/uvIndex');

describe('Teste de UV Index', () => {
  test('UV perfeito', () => {
    expect(validateUvIndex(0).uvIndex.severity).toEqual('info');
  });
});
