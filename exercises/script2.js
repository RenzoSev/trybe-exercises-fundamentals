const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addKeys = (object, key, value) => object[key] = value;

const objectKeys = object => Object.keys(object);

const objectLength = object => Object.keys(object).length;

const objectValue = object => Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

