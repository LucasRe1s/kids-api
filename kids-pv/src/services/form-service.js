const data = [];

const NAME_MAX_LENGHT = 15;
const AGE_MAX = 12;
const CONTACT_MAX_LENGHT = 11;

function _validateForm(dataForm) {
    const {name, surname, age, responsible_01, contact} = dataForm;
    
    if (!name) throw Error('Name required');
    if (!surname) throw Error('Surname required');
    if (!age) throw Error('Age required');
    if (!responsible_01) throw Error('Responsible required');
    if (!contact) throw Error('Contact required');

    if (name.length > NAME_MAX_LENGHT) throw Error('Max lenght 15');
    if (age > AGE_MAX) throw Error('Age max 12 years');
    if (responsible_01.length > NAME_MAX_LENGHT) throw Error('Max lenght 15');
    if (contact.length > CONTACT_MAX_LENGHT) throw Error('Max lenght 11');
}

let idCounter = 1  

function createForm({dataForm}) {
    const id = idCounter++
    const _dataForm = dataForm
    _validateForm(dataForm);
    const form = {
        'id': id,
        data: dataForm,
        date: new Date(),
        activated: false
    }
    data.push(form);

    console.log('Data received successfully!');
    return form;
}

function getForms() {
    return data;
}

function getFormByName(name, surname ) {
    const nameFound = data.filter(form =>form.data.name === name);
    const surnameFound = data.filter(form =>form.data.surname === surname);
    const fullName = nameFound.concat(surnameFound)
    return fullName.length > 0 ? nameFound : null;
}

async function checkIn (name, surname, activated) {

    // console.log(name, surname, activated)
    const formToUpdate = getFormByName(name, surname);
    if (!formToUpdate) throw Error(`Form not found. ${formToUpdate}`);

const updatedForm = {
    id: formToUpdate.id,
    age: formToUpdate.age,
    name: name,
    surname: surname,
    date: new Date(),
    activated: activated
};
    console.log(updatedForm)


    return updatedForm;
    // console.log(check.activated)

}

module.exports = {
    createForm, getForms, getFormByName, checkIn
}