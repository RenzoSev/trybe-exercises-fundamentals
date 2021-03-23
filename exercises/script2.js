const getRefactorial = num => {
    let refactorial = num;
    for (let index = num - 1; index > 0; index -= 1) refactorial *= index;
    return refactorial;
};

console.log(getRefactorial(4));