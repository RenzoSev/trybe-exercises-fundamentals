// PARTE 1
const calcRefactorial = (num) => {
    let refactorial = num;
    for (let index = num - 1; index > 0; index -= 1) refactorial *= index;
    return refactorial;
}

const getRefactorial = num => num === 0 ? 1 : calcRefactorial(num)

console.log(getRefactorial(0));

// PARTE 2
const longestWord = (string) => {
    const array = string.split(' ');
    let word = array[0];
    for (let string of array) word = string.length > word.length ? string : word
    return word
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));