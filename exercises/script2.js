const calcRefactorial = (num) => {
    let refactorial = num;
    for (let index = num - 1; index > 0; index -= 1) refactorial *= index;
    return refactorial;
}
const getRefactorial = num => num === 0 ? 1 : calcRefactorial(num)

console.log(getRefactorial(0));