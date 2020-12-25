const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datatodoSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Datatodo', datatodoSchema);