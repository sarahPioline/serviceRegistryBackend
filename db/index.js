const mongoose = require('mongoose');
const { Service } = require('./model/Service')

mongoose.connect('mongodb://localhost/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ServicesCollection = Service;

module.exports = { ServicesCollection };