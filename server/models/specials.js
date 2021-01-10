const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialsSchema = new Schema({
    name: String,
    desc: String,
    value: String,
});

module.exports = mongoose.model('specials', specialsSchema);