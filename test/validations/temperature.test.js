const {
    validateTemperature
} = require('../../lib/validations/temperature');

describe("Teste de Temperatura:", () => {

    test('Perfeita', () => {
        expect(validateTemperature(23).temperature.severity).toEqual("info");
    });

    test('Baixa', () => {
        expect(validateTemperature(15).temperature.severity).toEqual("warn");
    });

    test('Muito alta', () => {
        expect(validateTemperature(26).temperature.severity).toEqual("warn");
    });
});