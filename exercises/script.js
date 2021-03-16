const form = document.querySelector('#form-resume');

const states = {
    ac: 'Acre',
    al: 'Alagoas',
    ap: 'Amapá',
    am: 'Amazonas',
    ba: 'Bahia',
    ce: 'Ceará',
    df: 'Distrito Federal',
    es: 'Espírito Santo',
    go: 'Goiás',
    ma: 'Maranhão',
    mt: 'Mato Grosso',
    ms: 'Mato Grosso do Sul',
    mg: 'Minas Gerais',
    pa: 'Pará',
    pb: 'Paraíba',
    pr: 'Paraná',
    pe: 'Pernambuco',
    pi: 'Piauí',
    rj: 'Rio de Janeiro',
    rn: 'Rio Grande do Norte',
    rs: 'Rio Grande do Sul',
    ro: 'Rondônia',
    rr: 'Roraima',
    sc: 'Santa Catarina',
    sp: 'São Paulo',
    se: 'Sergipe',
    to: 'Tocantins',
};

const createOptions = _ => {
    for (let index in states) {
        const optionElement = document.createElement('option')
        optionElement.src = index
        optionElement.innerText = states[index];
        document.querySelector('#state').appendChild(optionElement);
    }
};

const verifyDate = _ => {
    const date = document.querySelector('#start-date').value;
    const arrayDate = date.split('-');

    if (arrayDate[0] < 0) window.alert('O ano não deve ser negativo.');
    else if (arrayDate[1] > 12 || arrayDate[1] < 1) window.alert('Mês inválido. Tente novamente.');
    else if (arrayDate[2] > 31 || arrayDate[2] < 0) window.alert('Dia inválido. Tente novamente.');
};

const submitResume = _ => form.onsubmit = ((e) => e.preventDefault());

const printResume = _ => {
    document.querySelector('#print').addEventListener('click', _ => {
        const queryForm = $('#form-resume').serializeArray();
        const section = document.querySelector('#section-resume-printed');
        const div = document.createElement('div');
        
        for (let index = 0; index < queryForm.length; index += 1) {
            const paragraph = document.createElement('p');
            paragraph.innerText = queryForm[index].value;
            div.appendChild(paragraph);
        }
        
        section.appendChild(div);
    });
};

const resetResume = _ => {
    document.querySelector('button[type=reset]').addEventListener('click', _ => {
        const divResume = document.querySelector('#section-resume-printed div') 
        if ( divResume !== null)  divResume.remove();
        else return;
    })
}

createOptions();
verifyDate();
submitResume();
printResume();
resetResume();