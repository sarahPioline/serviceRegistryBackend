const mongoose = require('mongoose');
const { Service } = require('./model/Service')

mongoose.connect('mongodb://localhost:27017/services', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ServicesCollection = Service;

module.exports = { ServicesCollection };