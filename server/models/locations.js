const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
    name: String,
    desc: String,
});

module.exports = mongoose.model('Locations', locationsSchema);