const { validateAirHumidity } = require('../../lib/validations/airHumidity');

describe('Teste de umidade', () => {
  test('Perfeita', () => {
    expect(validateAirHumidity(60).humidity.severity).toEqual('info');
  });

  test('Baixa', () => {
    expect(validateAirHumidity(0).humidity.severity).toEqual('warning');
  });

  test('Muito alta', () => {
    expect(validateAirHumidity(80).humidity.severity).toEqual('warning');
  });
});
