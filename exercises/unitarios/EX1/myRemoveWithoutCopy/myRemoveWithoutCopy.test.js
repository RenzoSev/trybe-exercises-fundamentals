const { describe, expect, it } = require('@jest/globals');
const myRemove = require('../myRemove/myRemove');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('EXERCÍCIO 1 - PARTE 3', () => {
    const array = [1, 2, 3, 4];
    
    it('Verifique se myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([...array], 3)).toEqual([1, 2, 4]);
    });

    it('Verifique se myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([...array], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifique se o array passado por parâmetro sofreu alterações', () => {
        const changedArray = [1, 2, 3];
        myRemoveWithoutCopy(changedArray, 3);
        expect(changedArray).toEqual([1, 2]);
    })

    it('Verifique se myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([...array], 5)).toEqual([1, 2, 3, 4]);
    })
});