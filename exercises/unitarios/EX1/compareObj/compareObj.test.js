const { describe, it, expect } = require('@jest/globals');
const { obj1, obj2, obj3 } = require('./compareObj');

describe('EXERCÍCIO 1 - PARTE 5', () => {
    it('Compare dois objetos para verificar se são idênticos', () => {
        expect(obj1).toEqual(obj2);
    })

    it('Compare dois objetos para verificar se são diferentes', () => {
        expect(obj1).not.toEqual(obj3);
    })
})
