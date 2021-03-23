//Alterado com novidades do ES6
// PARTE 1
const testingScope = escopo => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(`${ifScope} + o que estou fazendo aqui ? :O`);
}

testingScope(true);

// PARTE 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortArray = () => console.log(oddsAndEvens.sort((a, b) => a - b));
// Seu código aqui.
sortArray();