// 1) Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindromes(word) {
    let string = word.toLowerCase();
    let stringArray = Array.from(string);
    let stringReverse = ''; // Poderia utilizar string.reverse(), mas tentei priorizar mais do que vimos até agora.
    let checker = false;

    for (index = stringArray.length - 1; index >= 0; index -= 1) {
        stringReverse += stringArray[index]
    }

    if (string === stringReverse) {
        checker = true
    }

    console.log(checker)
}

checkPalindromes('Ovo')
checkPalindromes('Garrafa')

// 2) Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbers = [2, 3, 4, 12, 8, 5, 10, 16];

function checkHighestInteger(array) {
    let higher = array[0];
    for (index = 0; index < array.length; index += 1) {
        if (array[index + 1] > higher) {
            higher = array[index + 1]
        }
    }
    console.log(higher)
}

highestInteger(numbers)

// 3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbers = [2, 3, 4, 12, 8, 5, 10, 16, -1];

function checkSmallestInteger(array) {
    let smaller = array[0];
    for (index = 0; index < array.length; index += 1) {
        if (array[index + 1] < smaller) {
            smaller = array[index + 1]
        }
    }
    console.log(smaller)
}

smallestInteger(numbers)

// 4) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Estrogonofopolda', 'Cairo', 'Joana'];

function checkHighestString(array) {
    let name = '';
    for (index = 0; index < array.length; index += 1) {
        if (array[index].length > name.length) {
            name = array[index]
        }
    }
    console.log(name)
}

checkHighestString(names)

// 5) Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numbers = [2, 3, 2, 5, 8, 2, 3];

function checkHighestRepetitionNumber(array) {
    let mostRepeatedNumber = 0;
    let currentNumber = -1;
    let number = 0;

    for (index = 0; index < array.length; index += 1) {
        for (indexVerificator = 0; indexVerificator < array.length; indexVerificator += 1) {
            if (numbers[index] === numbers[indexVerificator]) {
                currentNumber += 1
            }
        }

        if (currentNumber > mostRepeatedNumber) {
            number = array[index]
            mostRepeatedNumber = currentNumber
        }

        currentNumber = 0
    }
    console.log(number)
}

checkHighestRepetitionNumber(numbers)

// 6) Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function gaussSum (number) {
    let sumResult = number
    
    for (let index = number - 1; index > 0; index -= 1) {
        sumResult += index
    }

    console.log(sumResult)
}

gaussSum(5)