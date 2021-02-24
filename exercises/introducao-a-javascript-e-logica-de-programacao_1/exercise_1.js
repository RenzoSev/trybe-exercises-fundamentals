// Faça cinco programas, um para cada operação aritmética básica.

let num1 = 10;
let num2 = 15;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;

console.log(soma, subtracao, multiplicacao, divisao, modulo)

// Faça um programa que retorne o maior de dois números.

let num1 = 5
let num2 = 7

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// Faça um programa que retorne o maior de três números.

let num1 = 8
let num2 = 10
let num3 = 17

if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let num = 0

if (num > 0) {
    console.log('positive')
} else if (num < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

let somaDosAngulos = (angulo1 + angulo2 + angulo3) == 180;

console.log(somaDosAngulos);

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = 'Cavalo';

switch (peca.toLowerCase()) {
    case 'peão':
        console.log('Linha vertical')
        break;
    case 'bispo':
        console.log('Diagonal')
        break;
    case 'torre':
        console.log('Linha horizontal e vertical')
        break;
    case 'rei':
        console.log('Linha horizontal, vertical e diagonal')
        break;
    case 'rainha':
        console.log('Linha horizontal, vertical e diagonal')
        break;
    case 'cavalo':
        console.log('Formato de L')
        break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 89

if (nota >= 90 && nota <= 100) {
    console.log('A')
} else if (nota >= 80 && nota < 90) {
    console.log('B')
} else if (nota >= 70 && nota < 80) {
    console.log('C')
} else if (nota >= 60 && nota < 70) {
    console.log('D')
} else if (nota >= 50 && nota < 60) {
    console.log('E')
} else if (nota < 50 && nota >= 0) {
    console.log('F')
} else {
    console.log('ERRO')
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let num1 = 22
let num2 = 21
let num3 = 23

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 3 == 0){
    console.log('true');
} else {
    console.log('false');
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let num1 = 27
let num2 = 21
let num3 = 23

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 3 == 0){ //Outra forma de realizar o exerc é substituindo '==' po '!='
    console.log('false');
} else {
    console.log('true');
}

// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let valorCusto = 100;
let imposto = (valorCusto * 20) / 100;
let valorCustoTotal = valorCusto + imposto;
let valorVenda = 200;
let lucro = (valorVenda - valorCustoTotal);

console.log (lucro)

//
