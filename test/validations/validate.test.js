const {
    validateWeather, cleanValidations, validateWeek
} = require('../../lib/validations/validate');

const weather = {
    airHumidity: 10,
    temperature: 25,
    wind: 10,
    uvIndex: 0,
};

const validations = [
    {
        humidity: {
            severity: 'warn',
            message: 'Low humidity favors an outer leaf edge burn.',
        }
    },    
    {
        uvIndex: {
            severity: 'info',
            message: 'UV index is ideal for the plant.',
        }
    },     
    {
        temperature: {
            severity: 'info',
            message: 'Temperatura está ideal.',
        }
    },
    {
        wind: {
            severity: 'info',
            message: 'Sem riscos de rajadas de vento.',
        }
    }
];

test('Teste the validations from the weather', () => {
    expect(validateWeather(weather)).toEqual(validations);
});