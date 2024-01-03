const formService = require('../services/form-service')

async function createForm(req, res) {

try {
      const dadosFormulario = req.body;
      // console.log(dadosFormulario)
    const formCreated = formService.createForm({ dadosFormulario });
    res.status(201).json(formCreated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messageError: error.message });
  }
}


async function getForms(req, res) {
  try {
    const forms = formService.getForms();
    res.status(200).json(forms)
  } catch (error) {
    res.status(500).json({ messageError: error.message })
  }
}

module.exports = {
    createForm, getForms
}