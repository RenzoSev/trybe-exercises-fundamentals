// Exercício 1

let valor = Math.random() * 10;
let linha = ''

for (let index = 1; index <= valor; index += 1) {
    linha += '*'
    console.log(linha)
}

for (let index = 1; index <= 5; index += 1) {
    console.log(linha)
}

// Exercício 2

let valor = Math.random() * 10;
let linha = '';

for (let index = 1; index <= valor; index += 1) {
    linha += '*'
    console.log(linha)
}

// Exercício 3

let valor = Math.random() * 20;
let linha = '';
let simbolo = '*';

for (let index = valor; index > 0; index -= 1) {
    for (let indexColuna = 0; indexColuna <= valor; indexColuna += 1) {
        if (indexColuna < index) {
            linha = linha + ' ';
        } else {
            linha = linha + simbolo
        }
    }
    console.log(linha)
    linha = ''
}

// Exercício 4