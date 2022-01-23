const reverseString = require('./taskTwo.js');

test('returns reversed string', () => {
    expect(reverseString('vahan')).toBe('nahav');
})