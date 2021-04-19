const { describe, expect, it } = require('@jest/globals');
const { encode, decode } = require('./encode-decode');

describe('EXERCÍCIO 2 - PARTE 1', () => {
    const [ vows, nums ] = [ 'aeiou', '12345'];

    it('Verify if encode and decode are functions', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });

    it('Verify if encode vowels a, e, i, o, u become 1, 2, 3, 4 e 5', () => {
        expect(encode(vows)).toBe(nums)
    })

    it('Verify if decode nums 1, 2, 3, 4, 5 become a, e, i, o, u', () => {
        expect(decode(nums)).toBe(vows);
    })

    it('Verify if each vowel has been encoded to the right number', () => {
        vows
        .split('')
        .forEach((vowel, index) => expect(encode(vowel)).toBe(nums.split('')[index]));
    })

    it('Verify each num has been decoded to the right number', () => {
        nums
        .split('')
        .forEach((num, index) => expect(decode(num)).toBe(vows.split('')[index]));
    })

    it('Verify length between function parameter and function return', () => {
        expect(encode(vows).length).toBe(vows.length);
        expect(decode(nums).length).toBe(nums.length);
    })
});