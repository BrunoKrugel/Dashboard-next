const { validateWind } = require('../../lib/validations/wind');

describe('Teste de alertas de rajadas', () => {
  test('Rajadas sem risco', () => {
    expect(validateWind(0).wind.severity).toEqual('info');
  });

  test('Aviso de rajadas', () => {
    expect(validateWind(60).wind.severity).toEqual('warning');
  });

  test('Alerta de rajadas', () => {
    expect(validateWind(100).wind.severity).toEqual('error');
  });
});
