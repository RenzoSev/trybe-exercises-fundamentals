const { describe, it, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('EXERCÍCIO 1 => PARTE 3', () => {
    const action = myFizzBuzz;
    
    it('Um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(action(15)).toBe('fizzbuzz');
    })

    it('Um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(action(3)).toBe('fizz');
    })

    it('Um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(action(5)).toBe('buzz');
    })

    it('Um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(action(2)).toBe(2);
    })

    it('Um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(action('2')).toBeFalsy();
    })
})