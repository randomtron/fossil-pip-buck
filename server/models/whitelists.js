const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whitelistsSchema = new Schema({
    IMEI: String,
    IMSI: String,
    MSISDN: String,
});

module.exports = mongoose.model('Whitelists', whitelistsSchema);