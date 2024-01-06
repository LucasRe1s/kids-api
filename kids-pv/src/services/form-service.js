const data = [];

const NAME_MAX_LENGHT = 15;
const AGE_MAX = 11;
const CONTACT_MAX_LENGHT = 11;

function _validateForm(dataForm) {
    const { name, surname, age, responsible_01, contact } = dataForm;

    if (!name) throw Error('Name required');
    if (!surname) throw Error('Surname required');
    if (!age) throw Error('Age required');
    if (!responsible_01) throw Error('Responsible required');
    if (!contact) throw Error('Contact required');

    if (name.length > NAME_MAX_LENGHT) throw Error('Max lenght 15');
    if (age > AGE_MAX) throw Error('Age max 11 years');
    if (responsible_01.length > NAME_MAX_LENGHT) throw Error('Max lenght 15');
    if (contact.length > CONTACT_MAX_LENGHT) throw Error('Max lenght 11');
}
//Date formatted for Brazil
//brazilianDateFormat
function _brazilianDateFormat(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hour}:${minutes}`;

    /*
    function _brazilianDateFormat(date) {
    // Adapte esta função conforme necessário para seu formato desejado
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    return date.toLocaleDateString('pt-BR', options);
}
*/
}



let idCounter = 1

function createForm({ dataForm }) {
    const id = idCounter++
    const _dataForm = dataForm
    _validateForm(_dataForm);

    const currentDate = new Date();
    const formattedDate = _brazilianDateFormat(currentDate);

    const form = {
        'id': id,
        data: _dataForm,
        date: formattedDate,
        activated: false
    }

    data.push(form);

    console.log('Data received successfully!');
    return form;
}

function getForms() {
    return data;
}

function getFormByName(name, surname) {

    const nameFound = data.filter(form => form.data.name === name);
    const surnameFound = data.filter(form => form.data.surname === surname);

    if (nameFound.length > 0 && surnameFound.length > 0) {
        const fullName = nameFound.filter(form => surnameFound.some(sForm => sForm.id === form.id));
        return fullName.length > 0 ? fullName[0] : null;
    } else {
        return null;
    }
}

async function checkIn(name, surname, activated) {

    const formFound = getFormByName(name, surname);
    if (!formFound) throw Error(`Form not found. ${formFound}`);
    formFound.activated = activated;

    const currentDate = new Date();
    const formattedDate = _brazilianDateFormat(currentDate);
    formFound.date = formattedDate;

    const updatedForm = {
        id: formFound.id,
        age: formFound.data.age,
        name: name,
        surname: surname,
        date: formattedDate,
        activated: activated
    };

    return updatedForm;
}




// Função que será executada no check out
async function checkOut(name, surname) {
    // Defina o tempo limite em milissegundos (por exemplo, 5 minutos)
    const timeoutDuration = 1 * 60 * 1000; // 1 minuto
    
    // Adicione aqui o código que você deseja executar no check out
    const formFound = getFormByName(name, surname);
    if (!formFound) {
        throw Error(`Form not found for ${name} ${surname}`);
    }


    formFound.activated = false;
    

    const currentDate = new Date();
    const formattedDate = _brazilianDateFormat(currentDate);
    formFound.date = formattedDate;

    const updatedForm = {
        id: formFound.id,
        age: formFound.data.age,
        name: name,
        surname: surname,
        date: formattedDate,
        activated: formFound.activated
    };

    let timeoutId = setTimeout(async () => {
        try {
            
            (await formFound).activated = false;
            console.log("Check-out automático após o tempo limite");
        } catch (error) {
            console.error("Erro no check-out automático:", error.message);
        }
    }, timeoutDuration);
    
    

    console.log("Check out realizado!");
    return { updatedForm, timeoutId };
}




module.exports = {
    createForm, getForms, getFormByName, checkIn, checkOut
}