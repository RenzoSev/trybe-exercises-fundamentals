// Alterando tamanho da fonte:

document.getElementById('paragraph-text').style.fontSize = `${localStorage.getItem('fontsize')}px`;
document.getElementById('paragraph-text').style.color = `${localStorage.getItem('color')}`;
document.getElementById('paragraph-text').style.lineHeight = `${localStorage.getItem('lineHeight')}`;
document.body.style.backgroundColor = `${localStorage.getItem('colorBackground')}`;

document.querySelector('#input-tamanho-fonte').addEventListener('keydown', function pressEnter(element){
    if (element.key === 'Enter') {
        let fontSizeElement = document.querySelector('#input-tamanho-fonte');
        let fontSizeValue = fontSizeElement.value;
        localStorage.setItem('fontsize', fontSizeValue);
        document.getElementById('paragraph-text').style.fontSize = `${localStorage.getItem('fontsize')}px`
    }
})

// Cor da fonte:

document.getElementById('input-color-font').addEventListener('click', function clickColor(){
    let inputColorElement = document.getElementById('input-color-font');
    let inputColorValue = inputColorElement.value;
    localStorage.setItem('color', inputColorValue);
    document.getElementById('paragraph-text').style.color = `${localStorage.getItem('color')}`
})

// Espaçamento entre as linhas do texto:

document.getElementById('input-line-height').addEventListener('keydown', function pressEnter_1(element){
    if (element.key === 'Enter') {
    let inputLHElement = document.getElementById('input-line-height');
    let inputLHElementValue = inputLHElement.value;
    localStorage.setItem('lineHeight', inputLHElementValue);
    document.getElementById('paragraph-text').style.lineHeight = `${localStorage.getItem('lineHeight')}`;
    }
}) 

// Cor de fundo da tela: 

document.getElementById('input-color-background').addEventListener('click', function clickColor_1(element){
    let inputCBElement = document.getElementById('input-color-background');
    let inputCBElementValue = inputCBElement.value;
    localStorage.setItem('colorBackground', inputCBElementValue);
    document.body.style.backgroundColor = `${localStorage.getItem('colorBackground')}`;
}) 

// Tipo da fonte:

document.getElementById('selected-style')

// fontSizeElement.addEventListener('keydown', function pressEnter)

/* 
localStorage.setItem('fontsize', fontSize);
console.log(localStorage);
document.getElementById('paragraph-text').style.fontSize = `${localStorage.getItem('fontsize')}px`;
*/