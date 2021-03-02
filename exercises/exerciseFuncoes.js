// 1) Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindromes(word) {
    let string = word.toLowerCase()
    let stringArray = Array.from(string)
    let stringReverse = '' // Poderia utilizar string.reverse(), mas tentei priorizar mais do que vimos até agora.
    let checker = false
   
    for (index = stringArray.length - 1; index >= 0; index -= 1){
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

let numbers = [2, 3, 4, 12, 8, 5, 10, 16]

function higherInteger (array) {
    let higher = array[0]
    for (index = 0; index < array.length; index += 1){
        if (array[index + 1] > higher) {
            higher = array[index + 1]
        }
    }
    console.log(higher)
}

higherInteger(numbers)

//