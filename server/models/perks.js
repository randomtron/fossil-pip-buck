const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const perksSchema = new Schema({
    name: String,
    desc: String,
    level: String,
});

module.exports = mongoose.model('Perks', perksSchema);