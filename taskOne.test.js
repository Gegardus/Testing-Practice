const stringLength = require('./taskOne');

test('the length of string equals', () => {
    expect(stringLength('vahan')).toBe(5);
});

test('limit strings length', () => {
    expect(stringLength('')).toBe("Not Allowed!");
});

test('limit strings length', () => {
    expect(stringLength('vvvvvvvvvvvvvvvvvvv')).toBe("Not Allowed!");
});