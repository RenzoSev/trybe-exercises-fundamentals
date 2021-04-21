const letterFunc = require('./letterFunctions');
jest.mock('./letterFunctions');

describe('EXERCÍCIO 4 - Implementations', () => {
    it('should implement lower case in getUpper', () => {
        letterFunc.getUpper.mockImplementation((a) => a.toLowerCase());

        expect(letterFunc.getUpper('RENZO')).toBe('renzo');
        expect(letterFunc.getUpper).toHaveBeenCalled();
        expect(letterFunc.getUpper).toHaveBeenCalledWith('RENZO');
    })

    it('should implement last string in getFirst', () => {
        letterFunc.getFirst.mockImplementation(a => a.split('')[a.length - 1]);

        expect(letterFunc.getFirst('Renzo')).toBe('o');
        expect(letterFunc.getFirst).toHaveBeenCalled();
        expect(letterFunc.getFirst).toHaveBeenCalledWith('Renzo');
    })

    it('should implement concat 3 parameters in concatStrs', () => {
        letterFunc.concatStrs.mockImplementation((a, b, c) => a + b + c);

        expect(letterFunc.concatStrs('a', 'b', 'c')).toBe('abc');
        expect(letterFunc.concatStrs).toHaveBeenCalled();
        expect(letterFunc.concatStrs).toHaveBeenCalledWith('a', 'b', 'c');
    })
})