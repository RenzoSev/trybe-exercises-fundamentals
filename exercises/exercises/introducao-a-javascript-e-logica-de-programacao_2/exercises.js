// Primeiro exercício:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Segundo exercício:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;


for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i]
    console.log(soma)
}

// Terceiro exercício

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let indiceTotal = numbers.length;
let soma = 0;

for (let i = 0; i < indiceTotal; i++) {
    soma += numbers[i]
}

let media = soma / indiceTotal;

console.log(media)

// Quarto exercício

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let indiceTotal = numbers.length;
let soma = 0;

for (let i = 0; i < indiceTotal; i++) {
    soma += numbers[i]
}

let media = soma / indiceTotal;

if (media > 20) {
    console.log('Valor maior que 20.')
} else {
    console.log('Valor menor ou igual a 20.')
}

// Quinto exercício

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }

}

// Também é possível realizar a tarefa por meio de x.sort() e [x.lenght - 1]

console.log(maior)

// Sexto exercício

let numbers = [52, 92, 32, 192, 70, 8, 100, 2, 352, 272];
let quantidadeDeImpar = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        quantidadeDeImpar += 1;
    }
}

if (quantidadeDeImpar === 0) {
    quantidadeDeImpar = 'Nenhum valor encontrado'
}

console.log(quantidadeDeImpar)

//Sétimo exercício

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index]
    }
}

console.log(menor)

// Oitavo exercício

