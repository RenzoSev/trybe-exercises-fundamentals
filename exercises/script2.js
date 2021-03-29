const answer = (correct) => (validate) => validate.toLowerCase() === correct.toLowerCase(); // currying

const checkAnswers = (corrects, validates) => {
    let result = 0;
    for (let index = 0; index < corrects.length; index += 1) {
        if (studentAnswers[index] !== 'N.A') {
            result = corrects[index] === validates[index] ? result + 1 : result - 0.5;
        }
    }

    return result;
};

const answers = (corrects, validates, action) => action(corrects, validates);

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
