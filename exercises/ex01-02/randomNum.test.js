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

describe('PARTE 2 - Implementation Once', () => {
    it('should return the division of 2 nums', () => {
        random.getRandomNum = jest
            .fn()
            .mockImplementationOnce((a, b) => a / b);

        expect(random.getRandomNum(4, 2)).toBe(2);
        expect(random.getRandomNum).toHaveBeenCalled();
        expect(random.getRandomNum).toHaveBeenCalledWith(4, 2);
    })
})

describe('PARTE 3 - Reset Implementation', () => {
    it('should multiply 3 parameters and return result', () => {
        random.getRandomNum = jest
            .fn()
            .mockImplementation((a, b, c) => a * b * c);

        expect(random.getRandomNum(2, 2, 2)).toBe(8);
        expect(random.getRandomNum).toHaveBeenCalled();
        expect(random.getRandomNum).toHaveBeenCalledWith(2, 2, 2);
    })

    it('teste', () => {
        random.getRandomNum.mockReset();
        random.getRandomNum.mockImplementation(a => a * 2);

        expect(random.getRandomNum(2)).toBe(4);
        expect(random.getRandomNum).toHaveBeenCalled();
        expect(random.getRandomNum).toHaveBeenCalledWith(2);
        
    })
})