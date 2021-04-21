const Animals = [{
    name: 'Dorminhoco',
    age: 1,
    type: 'Dog'
  },
  {
    name: 'Soneca',
    age: 2,
    type: 'Dog'
  },
  {
    name: 'Preguiça',
    age: 5,
    type: 'Cat'
  },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({
        error: 'Não possui esse tipo de animal.'
      });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const findAnimalByName = (nameA) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(({ name }) => name === nameA);
      
      if(animal) return resolve(animal);
      return reject('Animal não disponível');
    }, 100);
  })
);

const getAnimal = (nameA) => findAnimalByName(nameA).then(name => name);

const findAnimalByAge = (ageA) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = Animals.find(({ age }) => age === ageA);

      if(age) return resolve(age);
      
      return reject('Nenhum animal com a idade.');
    }, 100)
  })
);

const getAnimalByAge = (ageA) => findAnimalByAge(ageA).then(age => age); 

module.exports = {
  getAnimalByAge,
  getAnimal
};