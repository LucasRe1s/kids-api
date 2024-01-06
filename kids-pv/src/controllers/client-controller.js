const formService = require('../services/form-service')

async function createForm(req, res) {
try {
      const dataForm = req.body;
      // console.log(dadosFormulario)
    const formCreated = await formService.createForm({ dataForm });
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

async function getFormByName(req, res) {

  try {
    const fullName = req.params.fullName;
    const [name, surname] = fullName.split(' ');
    const searchFullName = formService.getFormByName(name, surname);

    if (searchFullName) {
      res.status(200).json(searchFullName);
    } else {
      res.status(404).json({ message: 'Form not found.' });
    }

  } catch (error) {
    res.status(500).json({ messageError: error.message })
  }
}

async function checkIn(req, res) {

  try {
    const fullName = req.params.fullName;
    const activated = req.body;
    const [name, surname] = fullName.split(' ');

    const searchFullName = await formService.checkIn( name, surname, activated )

    res.status(200).json(searchFullName);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

async function checkOut(req, res) {

  try {
    const fullName = req.params.fullName;
    const [name, surname] = fullName.split(' ');

    const searchFullName = await formService.checkIn( name, surname)

    res.status(200).json(searchFullName);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

module.exports = {
    createForm, getForms, getFormByName, checkIn, checkOut
}