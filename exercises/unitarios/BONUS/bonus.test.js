const { describe, expect, it } = require('@jest/globals');
const searchEmployee = require('./bonus');

describe('BÔNUS => Testa a função searchEmployee', () => {
    const [ idAna, firstNameAna ] = ['8579-6', 'firstName'];
    const [ idGeorge, lastNameGeorge ] = ['5569-4', 'lastName'];
    const [ idLeila, specialitiesLeila ] = ['4456-4', 'specialities'];
    const [ idWrong, firstNameWrong, lastNameWrong ] = ['30912834', 'firstName', 'laaaastName'];
   
    it('Verify if the typeof is function', () => {
        expect(typeof searchEmployee).toBe('function')
    })

    it('Verify if is a defined value returning', () => {
        expect(searchEmployee(idAna, firstNameAna)).toBeDefined();
    })

    it('Verify if return the right information about employee', () => {
        expect(searchEmployee(idAna, firstNameAna)).toBe('Ana');
        expect(searchEmployee(idGeorge, lastNameGeorge)).toBe('Jobs');
        expect(searchEmployee(idLeila, specialitiesLeila)).toEqual(['Context API', 'RTL', 'Bootstrap']);
    })

    it('Verify return with wrong parameter ID', () => {
        expect(() => searchEmployee(idWrong, firstNameWrong)).toThrow();
        expect(() => searchEmployee(idWrong, firstNameWrong)).toThrow(/ID não identificada/);
    })

    it('Verify return with undefined employee information', () => {
        expect(() => searchEmployee(idWrong, lastNameWrong)).toThrow('Informação indisponível');
    })
})