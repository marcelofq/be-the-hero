const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) - acessíveis através de request.query
 * Route Params: Parâmetros utilizados para identiicar recursos (users/:id) - accesíveis através de request.params
 * Reques Body: Corpo da requisição, utilizados para criar ou alterar recursos - accesíveis através de request.body
 */

 routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;