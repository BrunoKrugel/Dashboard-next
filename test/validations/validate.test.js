const {
    validateWeather,
    validateWeek
} = require('../../lib/validations/validate');

const weather = {
    airHumidity: 10,
    temperature: 25,
    wind: 10,
    uvIndex: 0,
};

const week = {
    "list": [{
        "weather": [{
            "id": 500,
            "main": "Rain"
        }]
    }, {
        "weather": [{
            "id": 500,
            "main": "Rain"
        }]
    }, {
        "weather": [{
            "id": 500,
            "main": "Rain"
        }]
    }, {
        "weather": [{
            "id": 500,
            "main": "Rain"
        }]
    }, {
        "weather": [{
            "id": 500,
            "main": "Rain"

        }]
    }, {
        "weather": [{
            "id": 500,
            "main": "Clouds"
        }]
    }, {
        "weather": [{
            "id": 500,
            "main": "Rain"
        }]
    }]
};

const validationsWeather = {
    humidity: {
        severity: 'warn',
        message: 'Low humidity favors an outer leaf edge burn.',
    },
    uvIndex: {
        severity: 'info',
        message: 'UV index is ideal for the plant.',
    },
    temperature: {
        severity: 'info',
        message: 'Temperatura está ideal.',
    },
    wind: {
        severity: 'info',
        message: 'Sem riscos de rajadas de vento.',
    }
};

const validationsWeek = {
    Rain: {
        severity: 'warning',
        message: 'Quantidade de chuvas acima do ideal.',
    },
    Sun: {
        severity: 'info',
        message: 'Quantidade de sol para as hortas é ideal.',
    }
};

describe("Teste de validações", () => {
    test('Tempo', () => {
        expect(validateWeather(weather)).toEqual(validationsWeather);
    });

    test('Semanais', () => {
        expect(validateWeek(week)).toEqual(validationsWeek);
    });
});