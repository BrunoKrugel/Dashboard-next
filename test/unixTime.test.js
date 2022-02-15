const { unixToStamp } = require('../lib/unixTime').default;

test('TEST', () => {
    expect(unixToStamp('1644564141')).toBe('1644564141');
});