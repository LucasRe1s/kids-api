const data = [];


function createForm({dadosFormulario}) {
    // const dadosFormulario = req.body;
    const date = Date();
    const id = 0
    
    const form = {
        'id': id,
        "dados": dadosFormulario,
        "data": date,
        "ativo": false
    }
      
    data.push(form);
    console.log('Dados recebidos com sucesso!');

    console.log(form)
    return form
}

function getForms() {
    return data;
}

module.exports = {
    createForm, getForms
}