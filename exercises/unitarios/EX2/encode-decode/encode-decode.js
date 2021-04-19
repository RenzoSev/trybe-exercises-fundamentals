// Code
const encodeLetter = (letter) => {
    const encodedVowels = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    
    return Object
    .keys(encodedVowels)
    .reduce((res, key) => res === key ? encodedVowels[key] : res, letter);
}
const encode = (str) => str.split('').map(encodeLetter).join('');

// Decode
const decodeNum = (num) => {
    const decodedNums = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };
    
    return Object
    .keys(decodedNums)
    .reduce((res, key) => res === key ? decodedNums[key] : res, num);
}
const decode = (str) => str.split('').map(decodeNum).join('');

module.exports = {
    encode,
    decode,
}