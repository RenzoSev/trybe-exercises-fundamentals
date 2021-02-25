// Primeiro exercício:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length ; i ++) {
    console.log(numbers[i]);
}

// Segundo exercício:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;


for (let i = 0; i < numbers.length ; i ++) {
    soma += numbers[i]
    console.log(soma)
}

// Terceiro exercício

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let indiceTotal = numbers.length;
let soma = 0;

for (let i = 0; i < indiceTotal ; i ++) {
    soma += numbers[i]
}

let media = soma / indiceTotal;

console.log(media)



