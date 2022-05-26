const {
    weatherCondition
} = require('../lib/string/weatherCondition');

const arr = {
    list: [{
        weather: [{
            main: 'Rain'
        }]
    }, {
        weather: [{
            main: 'Rain'
        }]
    }, {
        weather: [{
            main: 'Sun'
        }]
    }, {
        weather: [{
            main: 'Sun'
        }]
    }, {
        weather: [{
            main: 'Sun'
        }]
    }]
}

test('Test list for rain conditions', () => {
    expect(weatherCondition(arr.list, 'rain')).toEqual(2);
});


test('Test list for sun conditions', () => {
    expect(weatherCondition(arr.list, 'sun')).toEqual(3);
});

test('Test list for sun conditions', () => {
    expect(weatherCondition(arr.list, 'cloud')).toEqual(0);
});