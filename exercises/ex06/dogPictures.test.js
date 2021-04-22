const section = require('./dogPictures');

describe('EXERCÍCIO 6 - Resolve/Reject', () => {
    const fecthAPI = jest.spyOn(section, 'fetchDog');
    afterEach(fecthAPI.mockReset);
    
    it('verify the promises resolve', async () => {
        fecthAPI.mockResolvedValue('Sucesso');

        expect(fecthAPI()).resolves.toMatch('Sucesso');
        expect(fecthAPI).toHaveBeenCalled();
    });

    it('verify the promise reject', async () => {
        fecthAPI.mockRejectedValue('Falhou');

        expect(fecthAPI()).rejects.toBe('Falhou');
        expect(fecthAPI).toHaveBeenCalled();
    });
});
