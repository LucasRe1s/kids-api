const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost/checkin', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir modelo de Participante
const participantSchema = new mongoose.Schema({
    name: String,
    checkedIn: Boolean,
    checkInTime: Date,
    checkOutTime: Date
});

const Participant = mongoose.model('Participant', participantSchema);

// Middleware para analisar solicitações JSON
app.use(bodyParser.json());

// Rota para fazer check-in
app.post('/checkin', async (req, res) => {
    const { name } = req.body;

    // Criar um novo participante com data e hora de check-in
    const participant = new Participant({
        name,
        checkedIn: true,
        checkInTime: new Date()
    });

    try {
        await participant.save();
        res.status(201).json({ message: 'Check-in realizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer check-in.' });
    }
});

// Rota para fazer check-out
app.post('/checkout', async (req, res) => {
    const { name } = req.body;

    try {
        // Encontrar participante pelo nome
        const participant = await Participant.findOne({ name });

        if (!participant) {
            res.status(404).json({ error: 'Participante não encontrado.' });
            return;
        }

        // Atualizar o status de check-in, data e hora de check-out
        participant.checkedIn = false;
        participant.checkOutTime = new Date();
        await participant.save();

        res.json({ message: 'Check-out realizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer check-out.' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
