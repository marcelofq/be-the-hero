const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json()); //muito importante pra entender requisições post onde o Request Body é JSON.
app.use(routes);

app.listen(3333);


/**
 * Entidades:
 * ONG (NGO)
 * caso (incident)
 * 
 * Funcionalidades:
 * Login de ONG 
 * Cadastro de ONG
 * Logout de ONG
 * Cadastrar novos casos
 * Deletar casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG (whatsapp e email)
 */