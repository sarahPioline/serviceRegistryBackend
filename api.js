const express = require('express');
const bp = require('body-parser');

const { Service } = require('./db/index');

const { getServices, getOneService, postServices, putService, deleteService } = require('./lib/services.js')

const api = express();

api.use(bp.json());

// liste des routes CRUD
//    - lister / rechercher les services           GET /services
//    - afficher 1 service (par ID)                GET /services/:id
//    - créer                                      POST /services
//    - mettre à jour                              PUT /services/:id
//    - supprimer                                  DELETE /services/:id

api.get('/services', getServices);

api.get('/services/:id', getOneService);

api.post('/services', postServices);

api.put('/services/:id', putService);

api.delete('/services/:id', deleteService);

module.exports = { api };