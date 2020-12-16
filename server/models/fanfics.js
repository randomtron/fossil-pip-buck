const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fanficsSchema = new Schema({
    name: String,
    author: String,
});

module.exports = mongoose.model('Fanfics', fanficsSchema);