const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const sumRepet = (acc, cur) => cur === 'a' ? acc + 1 : acc; 
const getName = (acc, cur) => acc + cur.toLowerCase().split('').reduce(sumRepet, 0);

function containsA() {
    return names.reduce(getName, 0);
}

console.log(containsA());

// console.log(names[0].split('').reduce((acc, cur) => cur === 'a' ? acc + 1 : acc));

assert.deepStrictEqual(containsA(), 20);