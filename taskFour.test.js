const capitalize = require('./taskFour');

test('capitalized string', () => {
    expect(capitalize('vahan')).toBe('Vahan');
});