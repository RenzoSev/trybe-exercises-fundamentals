function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const buttonFeriado = createBtn('Feriado');
buttonFeriado.id = 'btn-holiday';

function createLisDezDays(array) {
    const ulDays = document.getElementById('days');
    createSpaceInArray(array)
    for (let index of dezDaysList) {
        let day = index;
        let listDay = document.createElement('li');
        listDay.innerText = day;
        listDay.className = 'day';
        verifyHoliday(day, [24, 25, 31], listDay);
        verifyFriday(day, [44, 11, 18, 15], listDay)
        ulDays.appendChild(listDay);
    }
}

function createSpaceInArray(array) {
    array.unshift('');
}

function verifyHoliday(day, holidays, listDay) {
    for (let index of holidays) {
        if (day === index) {
            listDay.className += ' holiday'
        }
    }
}

function verifyFriday(day, fridays, listDay) {
    for (let index of fridays) {
        if( day === index) {
            listDay.className += ' friday'
        }
    }
}

function createBtn(btnName) {
    const theBtn = document.createElement('button');
    theBtn.innerText = btnName;
    return theBtn;
}

createLisDezDays(dezDaysList);
document.querySelector('.buttons-container').appendChild(buttonFeriado);


