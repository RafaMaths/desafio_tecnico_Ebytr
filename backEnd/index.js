// importação de dependências
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

//variável de ambiente da porta
PORT = process.env.PORT || 3000;

//inicialização do express
const app = express();

//criação da rota padrão
app.get('/', (req, res) => {
  res.json({message: "Começando o desafio tecnico"})
});

//escuta da porta
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} `)
})

