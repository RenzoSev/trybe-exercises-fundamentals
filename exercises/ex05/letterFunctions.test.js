const letterFunc = require('./letterFunctions');

describe('EXERCÍCIO 5 - Implementation/Restore', () => {
    it('should implement lower case in getUpper', () => {
        const upper = jest
        .spyOn(letterFunc, 'getUpper')
        .mockImplementation((a) => a.toLowerCase());

        expect(upper('RENZO')).toBe('renzo');
        expect(upper).toHaveBeenCalled();
        expect(upper).toHaveBeenCalledWith('RENZO');

        upper.mockRestore();
        
        expect(letterFunc.getUpper('renzo')).toBe('RENZO');
    })
})