let clickCount = 0;
const button = document.querySelector('#button-count');

const buttonCount = () => button.addEventListener('click', () => {
    clickCount += 1;
    document.querySelector('#result').innerText = clickCount;
})

buttonCount();