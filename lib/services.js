const { ServicesCollection } = require('../db/index');
const { Service } = require("../db/model/Service");

// const getService = async () => {

// }

async function getServices(req, res) {
    let services;
    try {
        services = await ServicesCollection.find();
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    if (services) {
        res.status(200).json(services);
        return services;
    } else {
        console.log("erreur");
        return res.status(404).json({
            message: "Services not found !"
        });
    }
}

async function getOneService(req, res) {
    const { id } = req.params;
    let service;

    try {
        service = await ServicesCollection.findOne({ _id: id });
    } catch (err) {
        res.status(400).json(err);
    }

    if (service) {
        res.status(200).json(service);
        return service;
    } else {
        res.status(404).json({
            message: "Service not found !"
        });
    }
}

async function postServices(req, res) {
    let { name, location, status, description } = req.body;
    let service = new Service({ name, location, status, description });

    try {
        await service.save();
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

    res.status(201).json(service);
}

async function putService(req, res) {

    const { id } = req.params;
    const { name, location, status, description } = req.body;

    let service;

    try {
        service = await ServicesCollection.findOne({ _id: id });
    } catch (err) {
        res.status(400).json(err);
    }

    if (service) {
        service.name = name;
        service.location = location;
        service.status = status;
        service.description = description;

        try {
            await service.save();
        } catch (err) {
            res.status(400).json(err);
        }

        res.status(200).json(service);
    } else {
        res.status(404).json({
            message: "Service not found !"
        });
    }
}

async function deleteService(req, res) {
    const { id } = req.params;

    let service;

    try {
        service = await ServicesCollection.findOne({ _id: id });
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
}

module.exports = {
    getServices,
    getOneService,
    postServices,
    putService,
    deleteService
};