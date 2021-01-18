const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
    name: String,
    gender: String,
    race: String,
    desc: String,
});

module.exports = mongoose.model('Characters', charactersSchema);