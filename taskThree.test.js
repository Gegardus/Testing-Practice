const Calculator = require('./taskThree');

describe('Calculations', () => {
    const calculator = new Calculator(5, 4);
    const firstEmpty = new Calculator(null, 5);
    const secondEmpty = new Calculator(4, null);
  
    test('Addition', () => {
      expect(calculator.add()).toBe(9);
      expect(firstEmpty.add()).toBe('First number empty');
      expect(secondEmpty.add()).toBe('Second number empty');
    });
  
    test('Subtraction', () => {
      expect(calculator.subtract()).toBe(1);
      expect(firstEmpty.subtract()).toBe(-5);
      expect(secondEmpty.subtract()).toBe(4);
    });
  
    test('Multiplication', () => {
      expect(calculator.multiple()).toBe(20);
      expect(secondEmpty.multiple()).toBe('Second number empty');
      expect(firstEmpty.multiple()).toBe('First number empty');
    });
  
    test('Division', () => {
      expect(calculator.divide()).toBe(1.25);
      expect(secondEmpty.divide()).toBe('undefind');
      expect(firstEmpty.divide()).toBe(0);
    });
  });
  