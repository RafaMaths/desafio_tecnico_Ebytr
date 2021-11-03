// importação de dependências
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

//variável de ambiente da porta
PORT = process.env.PORT || 3000;

//inicialização do express
const app = express();

const corsSetup = {
  origin: `http://localhost:${PORT}`
};

app.use(cors(corsSetup));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded)

//criação da rota padrão
app.get('/', (req, res) => {
  res.json({message: "Começando o desafio tecnico"})
});

module.exports = app


