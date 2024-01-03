const data = [];

const NAME_MAX_LENGHT = 15;
const AGE_MAX = 12;
const CONTACT_MAX_LENGHT = 11;

function _validateForm(dadosFormulario) {
    const name = dadosFormulario.name;
    const age = dadosFormulario.age;
    const responsible_01 = dadosFormulario.responsible_01;
    const contact = dadosFormulario.contact;
    
    if (!name) throw Error('Name required');
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
    // const dadosFormulario = req.body;
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

    console.log('Dados recebidos com sucesso!');
    return form;
}

function getForms() {
    return data;
}

async function getFormName(name) {
    
    console.log(name)
    // console.log(nameIn);
    // return nameIn
}

module.exports = {
    createForm, getForms, getFormName
}