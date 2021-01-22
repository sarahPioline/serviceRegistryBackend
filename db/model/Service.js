const mongoose = require('mongoose');
const { ServicesSchema } = require('../schema/ServiceSchema')

const { model } = mongoose;

const Service = model('services', ServicesSchema);

module.exports = { Service };