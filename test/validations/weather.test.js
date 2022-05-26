const {
    validateRain, validateSun
} = require('../../lib/validations/weather');


const weekInput = {
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lon": -0.1257,
            "lat": 51.5085
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 0
    },
    "cod": "200",
    "message": 18.2487983,
    "cnt": 7,
    "list": [{
        "dt": 1645099200,
        "sunrise": 1645081862,
        "sunset": 1645118298,
        "temp": {
            "day": 10.56,
            "min": 8.13,
            "max": 11.17,
            "night": 8.13,
            "eve": 8.56,
            "morn": 8.77
        },
        "feels_like": {
            "day": 9,
            "night": 5.7,
            "eve": 5.38,
            "morn": 5.19
        },
        "pressure": 1011,
        "humidity": 51,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 9.8,
        "deg": 264,
        "gust": 22.23,
        "clouds": 99,
        "pop": 0.52,
        "rain": 0.39
    }, {
        "dt": 1645185600,
        "sunrise": 1645168144,
        "sunset": 1645204807,
        "temp": {
            "day": 7.45,
            "min": 4.17,
            "max": 11.18,
            "night": 4.17,
            "eve": 5.01,
            "morn": 10.91
        },
        "feels_like": {
            "day": 1.95,
            "night": -1.13,
            "eve": -0.49,
            "morn": 10.35
        },
        "pressure": 990,
        "humidity": 66,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 14.81,
        "deg": 226,
        "gust": 31.87,
        "clouds": 82,
        "pop": 1,
        "rain": 2.47
    }, {
        "dt": 1645272000,
        "sunrise": 1645254425,
        "sunset": 1645291316,
        "temp": {
            "day": 6.62,
            "min": 3.44,
            "max": 7.64,
            "night": 3.73,
            "eve": 4.06,
            "morn": 3.72
        },
        "feels_like": {
            "day": 2.3,
            "night": 0.86,
            "eve": -1.06,
            "morn": -0.66
        },
        "pressure": 1008,
        "humidity": 78,
        "weather": [{
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
        }],
        "speed": 8.69,
        "deg": 229,
        "gust": 18.84,
        "clouds": 65,
        "pop": 1,
        "rain": 4.62
    }, {
        "dt": 1645358400,
        "sunrise": 1645340705,
        "sunset": 1645377825,
        "temp": {
            "day": 10.51,
            "min": 3.87,
            "max": 10.72,
            "night": 4.6,
            "eve": 8.06,
            "morn": 6.42
        },
        "feels_like": {
            "day": 9.71,
            "night": -0.82,
            "eve": 3.83,
            "morn": 3.03
        },
        "pressure": 1007,
        "humidity": 80,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 10.19,
        "deg": 234,
        "gust": 23.18,
        "clouds": 100,
        "pop": 1,
        "rain": 0.94
    }, {
        "dt": 1645444800,
        "sunrise": 1645426983,
        "sunset": 1645464334,
        "temp": {
            "day": 7.27,
            "min": 2.91,
            "max": 8.14,
            "night": 6.48,
            "eve": 7.68,
            "morn": 2.91
        },
        "feels_like": {
            "day": 2.86,
            "night": 3.02,
            "eve": 3.91,
            "morn": -2.47
        },
        "pressure": 1013,
        "humidity": 58,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 9.77,
        "deg": 270,
        "gust": 22.75,
        "clouds": 98,
        "pop": 0.2,
        "rain": 0.15
    }, {
        "dt": 1645531200,
        "sunrise": 1645513261,
        "sunset": 1645550842,
        "temp": {
            "day": 12.88,
            "min": 5.09,
            "max": 12.88,
            "night": 11.24,
            "eve": 11.66,
            "morn": 7.39
        },
        "feels_like": {
            "day": 11.76,
            "night": 10.38,
            "eve": 10.6,
            "morn": 4.89
        },
        "pressure": 1019,
        "humidity": 59,
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "speed": 8.86,
        "deg": 257,
        "gust": 18.78,
        "clouds": 99,
        "pop": 0
    }, {
        "dt": 1645617600,
        "sunrise": 1645599537,
        "sunset": 1645637350,
        "temp": {
            "day": 8.29,
            "min": 4.5,
            "max": 9.48,
            "night": 5.94,
            "eve": 7.25,
            "morn": 4.5
        },
        "feels_like": {
            "day": 6.26,
            "night": 2.86,
            "eve": 4.69,
            "morn": 1.56
        },
        "pressure": 1028,
        "humidity": 49,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 6.48,
        "deg": 299,
        "gust": 14.91,
        "clouds": 6,
        "pop": 0.2,
        "rain": 0.12
    }]
};


test('Validate rain in the next 7 days', () => {
    expect(validateRain(weekInput.list).Rain.severity).toEqual("warning");
});

test('Validate sun in the next 7 days', () => {
    expect(validateSun(weekInput.list).Sun.severity).toEqual("info");
});