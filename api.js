const express = require('express');
const bp = require('body-parser');

const { Service } = require('./db/index');

const { getServices, getOneService, postServices, putService } = require('./lib/services.js')

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
api.delete('/services/:id', async(req, res) => {
    const { id } = req.params;

    let service;

    try {
        service = await Service.findOne({ _id: id });
    } catch (err) {
        res.status(400).json(err);
    }

    if (service) {
        try {
            await service.remove();
        } catch (err) {
            res.status(500).json(err);
        }

        res.status(204).end();
    } else {
        res.status(404).json({
            message: "Service not found !"
        });
    }
});

module.exports = { api };