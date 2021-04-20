const getUserName = require('./getUserName');

describe('EXERCÍCIO 2 - Test the resolve and reject', () => {
    it('should resolve', () => {
        expect.assertions(2);
        return getUserName(4).then(name => {
            expect(name).toBe('Mark');
            expect(name).not.toBe('Paul');
        });
    });

    it('should reject', () => {
        expect.assertions(1);
        return getUserName(6).catch(error =>
            expect(error).toEqual({ error: 'User with 6 not found.'})
        );
    });
});