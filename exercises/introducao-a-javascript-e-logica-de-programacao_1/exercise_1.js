// Faça cinco programas, um para cada operação aritmética básica.
function sum(num1, num2) {
    let sum = num1 + num2
    return sum
}

function subtraction(num1, num2) {
    let subtraction = num1 - num2
    return subtraction
}

function multiplication(num1, num2) {
    let multiplication = num1 * num2
    return multiplication
}

function division(num1, num2) {
    let division = num1 / num2
    return division
}

function modul(num1, num2) {
    let modul = num1 % num2
    return modul
}

function basicArithmetic(num1, num2) {
    let sum = num1 + num2
    let subtraction = num1 - num2
    let multiplication = num1 * num2
    let division = num1 / num2
    let modul = num1 % num2
    console.log(sum, subtraction, multiplication, division, modul)
}

console.log(sum(5, 5), subtraction(15, 5), multiplication(2, 5), division(20, 2), modul(10, 2))
basicArithmetic(5, 5)

// Faça um programa que retorne o maior de dois números.

function higherNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

higherNumber(5, 10)

// Faça um programa que retorne o maior de três números.

function higherNumberThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else {
        console.log(num3)
    }
}

higherNumberThree(20, 10, 15)

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positiveOrNegative(num1) {
    if (num1 === 0) {
        console.log('zero')
    } else if (num1 > 0) {
        console.log('positive')
    } else {
        console.log('negative')
    }
}

positiveOrNegative(0)

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

function trueAngleTriangle(angle1, angle2, angle3) {
    let sumOfAngles = angle1 + angle2 + angle3
    let validation = false
    if (sumOfAngles === 180) {
        validation = true
    }
    console.log(validation)
}

trueAngleTriangle(60, 60, 60)

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chess(piece) {
    switch (piece.toLowerCase()) {
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
}

chess('Cavalo')

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

function grade(gradeValue) {
    if (gradeValue >= 90 && gradeValue <= 100) {
        console.log('A')
    } else if (gradeValue >= 80 && gradeValue < 90) {
        console.log('B')
    } else if (gradeValue >= 70 && gradeValue < 80) {
        console.log('C')
    } else if (gradeValue >= 60 && gradeValue < 70) {
        console.log('D')
    } else if (gradeValue >= 50 && gradeValue < 60) {
        console.log('E')
    } else if (gradeValue < 50 && gradeValue >= 0) {
        console.log('F')
    } else {
        console.log('ERRO')
    }
}

grade(90)

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

function evenNumbers(num1, num2, num3) {
    let validation = false
    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
        validation = true
    }
    console.log(validation)
}

evenNumbers(13, 7, 9)

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

function oddNumbers(num1, num2, num3) {
    let validation = true
    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
        validation = false
    }
    console.log(validation)
}

oddNumbers(21, 17, 15)

// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

function gainThousand(costValue, saleValue) {
    let tax = (costValue * 20) / 100
    let totalCostValue = tax + costValue
    let sellOne = saleValue - totalCostValue
    let sellThousand = sellOne * 1000
    if (costValue < 0 || saleValue < 0) {
        console.log('ERRO')
    } else {
        console.log(sellThousand)
    }
}

gainThousand(200, 400)

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let INSS;
let IR;
let salarioBase;
let parcelaIR;
let IRtotalValue;
let salarioLiquido;
let salarioBruto = 3400;
let trybe;

if (salarioBruto <= 1556.94) {
    INSS = (salarioBruto * 8) / 100;
} else if (salarioBruto <= 2594.92) {
    INSS = (salarioBruto * 9) / 100;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    INSS = (salarioBruto * 11) / 100;
} else {
    INSS = 570.88;
}

if (salarioBruto >= 3500) {
    trybe = (salarioBruto * 17) / 100;
} else {
    trybe = 0;
}

salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
    IR = 0;
    parcelaIR = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = 7.5;
    parcelaIR = 142.80;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = 15;
    parcelaIR = 354.80;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = 22.5;
    parcelaIR = 636.13;
} else {
    IR = 27.5;
    parcelaIR = 869.36;
}

IRtotalValue = ((salarioBase * IR) / 100) - parcelaIR;
salarioLiquido = salarioBase - IRtotalValue - trybe;

console.log(salarioLiquido)