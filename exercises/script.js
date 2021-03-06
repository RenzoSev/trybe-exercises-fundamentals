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
const holidaysList = [24, 25, 31];
const fridaysList = [4, 11, 15, 18];
const buttonHoliday = createBtn('Feriado');
const buttonFriday = createBtn('Friday');
buttonHoliday.id = 'btn-holiday';

function createLisDezDays(daysArray, listHolidays, listFridays) {
    const ulDays = document.getElementById('days');
    createSpaceInArray(daysArray)
    for (let index of daysArray) {
        let day = index;
        let listDay = document.createElement('li');
        listDay.innerText = day;
        listDay.className = 'day';
        verifyHoliday(day, listHolidays, listDay);
        verifyFriday(day, listFridays, listDay)
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
        if (day === index) {
            listDay.className += ' friday'
        }
    }
}

function createBtn(btnName) {
    const theBtn = document.createElement('button');
    theBtn.innerText = btnName;
    return theBtn;
}

createLisDezDays(dezDaysList, holidaysList, fridaysList);

document.querySelector('.buttons-container').appendChild(buttonHoliday);
document.querySelector('.buttons-container').appendChild(buttonFriday);

buttonHoliday.addEventListener('click', function changeColorHoliday() {
    const holidayDays = document.getElementsByClassName('holiday');
    for (let index of holidayDays) {
        if (index.style.color === ''){
            index.style.color = 'rgb(152,255,152)'
            console.log(index)
        } else {
            index.style.color = '';
        }
    }
})

buttonFriday.addEventListener('click', function changeColorFriday() {
    const fridayDays = document.getElementsByClassName('friday');
    for (let index = 0; index < fridayDays.length; index += 1) {
        if (fridayDays[index].innerText === 'SEXTOU'){
            fridayDays[index].innerText = fridaysList[index];
        } else {
            fridayDays[index].innerText = 'SEXTOU';
        }
    }
})