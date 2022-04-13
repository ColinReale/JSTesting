const { test, expect } = require('@jest/globals');
const filename = require('../index')
  
  
  describe('Tests all my functions', () => {
    test('reverses the number', () => {
      expect(filename.reverse_a_number(54321)).toBe('12345');
      
    });
    test('does sortString return string of expected length', () => {
        expect(filename.sortString('plmoknijbuhygvtfcrdxeszwaq')).toHaveLength(26);
    })
    test('is the function uppercase truthy', () => {
        expect(filename.uppercase('my name is chris carrabba')).toBeTruthy();
    })
    test('has the function been called', () => {
        const jestTest = jest.fn();
        filename.callWhateverIsGiven(jestTest)
        expect(jestTest).toHaveBeenCalled()
    })
    test('has the function returned', () => {
        const jestTest = jest.fn();
        filename.callWhateverIsGiven(jestTest)
        expect(jestTest).toHaveReturned()
    })
});