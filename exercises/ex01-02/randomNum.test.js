const random = require('./randomNum');

describe('PARTE 1 - Function getRandomNum', () => {
    it('should return 10', () => {
        random.getRandomNum = jest
        .fn()
        .mockReturnValue(10);

        expect(random.getRandomNum()).toBe(10);
        expect(random.getRandomNum).toHaveBeenCalled();
    })
})

describe('PARTE 2 - Implementations', () => {
    it('should return the division of 2 nums', () => {
        random.getRandomNum = jest
        .fn()
        .mockImplementationOnce((a, b) => a / b);

        expect(random.getRandomNum(4, 2)).toBe(2);
        expect(random.getRandomNum).toHaveBeenCalled();
        expect(random.getRandomNum).toHaveBeenCalledWith(4, 2);
    })
})