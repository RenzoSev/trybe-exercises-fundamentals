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

console.log(newEmployess());