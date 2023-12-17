const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000; // Escolha a porta que desejar

// Configuração do body-parser para analisar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Rota para a página do formulário
app.get('/', (req, res) => {
  res.sendFile(__dirname + '../view/index.html');
});

// Rota para lidar com o envio do formulário
app.post('/enviar', (req, res) => {

  const dadosFormulario = req.body;
  const date = Date();
  let arr = []
  
  const hash = {
      "dados": dadosFormulario,
      "data": date,
      "ativo": false
    }
    arr.push(hash)

  // Faça algo com os dados do formulário, por exemplo, imprima no console
  // console.log(dadosFormulario);
  console.log(arr);

  // Você pode enviar uma resposta de volta ao cliente se desejar
  res.send('Dados recebidos com sucesso!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
