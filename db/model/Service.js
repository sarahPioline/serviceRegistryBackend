const mongoose = require('mongoose');
const ServicesSchema = require('../schema/ServiceSchema')

mongoose.connect('mongodb://localhost/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const { model } = mongoose;

const Service = model('services', ServicesSchema);

module.exports = { Service };