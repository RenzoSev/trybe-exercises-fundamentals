const { getAnimal, getAnimalByAge } = require('./getListAnimals');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getAnimal('Bob')).rejects.toEqual('Animal não disponível');
      });
    });

    describe('Quando existe o animal com a idade procurada', () => {
      test('Retorna o objeto do animal', () => {
        const obj = {
          name: 'Dorminhoco',
          age: 1,
          type: 'Dog'
        };
        
        expect.assertions(1);
        return expect(getAnimalByAge(1)).resolves.toEqual(obj);
      })
    })

    describe('Quando não existe o animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getAnimalByAge(999999)).rejects.toEqual('Nenhum animal com a idade.');
      })
    })
  });