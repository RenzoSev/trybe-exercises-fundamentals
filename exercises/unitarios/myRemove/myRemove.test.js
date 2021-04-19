const { describe, expect, it } = require('@jest/globals');
const myRemove = require('./myRemove');

describe('EXERCÍCIO 2 => Parte 2', () => {
    const array = [1, 2, 3, 4];
    
    it('Verifique se myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    });

    it('Verifique se myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove(array, 3)).not.toEqual(array);
    });

    it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        myRemove(array, 3);
        expect(array).toEqual([1, 2, 3, 4]);
    });

    it('Verifique se myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove(array, 5)).toEqual(array);
    });
});