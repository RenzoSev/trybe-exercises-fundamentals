const hired = (name) => ({
    nomeCompleto: name, 
    email: `${name.replace(/\s/g, '').toLowerCase()}@trybe.com`,
});

const newEmployess = () => {
    const employess = {
        id1: hired('Pedro Guerra'),
        id2: hired('Luiza Drumond'),
        id3: hired('Carla Paiva'),
    };
    return employess;
};

const checkNumbers = (gNum, rNum) => gNum === rNum ? true : false; 

const draw = (gambleNum, action) => {
    const randomNum = Math.ceil(Math.random() * (5 - 1) + 1);
    const result = action(gambleNum, randomNum); 
    
    if (result) return 'Parabéns você ganhou';
    else return 'Tente novamente';
};