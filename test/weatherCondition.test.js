const { weatherCondition } = require('../lib/string/weatherCondition');

const arr = {
  list: [
    {
      weather: [
        {
          main: 'Rain',
        },
      ],
    },
    {
      weather: [
        {
          main: 'Rain',
        },
      ],
    },
    {
      weather: [
        {
          main: 'Sun',
        },
      ],
    },
    {
      weather: [
        {
          main: 'Sun',
        },
      ],
    },
    {
      weather: [
        {
          main: 'Sun',
        },
      ],
    },
  ],
};

describe('Teste de condições temporais', () => {
  test('Chuvas', () => {
    expect(weatherCondition(arr.list, 'rain')).toEqual(2);
  });

  test('Sol', () => {
    expect(weatherCondition(arr.list, 'sun')).toEqual(3);
  });

  test('Nuvens', () => {
    expect(weatherCondition(arr.list, 'cloud')).toEqual(0);
  });
});
