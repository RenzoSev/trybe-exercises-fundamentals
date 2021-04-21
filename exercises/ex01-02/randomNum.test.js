const random = require('./randomNum');

describe('PARTE 1 - Function getRandomNum', () => {
    it('shoul return 10', () => {
        random.getRandomNum = jest
        .fn()
        .mockReturnValue(10);

        expect(random.getRandomNum()).toBe(10);
        expect(random.getRandomNum).toHaveBeenCalled();
    })
})