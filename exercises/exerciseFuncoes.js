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

//