// Parte 1
const array = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Git']
const switchX = (string, word) => string.replace(/x/g, word);

console.log(switchX('Tryber x aqui!', 'Renzo'));

// Parte 2
const switchString = switchX('Tryber x aqui!', 'Renzo');
const skills = (string) => {
    console.log(`${string} Minhas cincos principais habilidades são:`);
    for (let skill of array.sort()) console.log(skill);
};

skills(switchString)