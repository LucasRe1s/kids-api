const express = require('express')
const router = express.Router();
const clientController = require('../controllers/client-controller')

router.get('/hello', (req, res) => {
  // res.render("Hello world!");
  res.send('Hello, world!');
});

router.get('/form', (req, res) => {
  res.sendFile(__dirname + 'C:/projects/kids-pv-canas/src/view/index.html');
});

router.get('/enviar', clientController.getForms);

router.post('/enviar', clientController.createForm);

// router.get('/forms', gamesController.getGames);

module.exports = router;