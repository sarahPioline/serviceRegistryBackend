const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const { Schema } = mongoose;

const ServicesSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    description: { type: String, required: false }
});

module.exports = { ServicesSchema };