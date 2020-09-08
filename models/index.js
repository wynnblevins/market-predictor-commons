const mongoose = require('mongoose');

const stockSnapshot = require('./stockSnapshot')(mongoose);
const watchedStock = require('./watchedStock')(mongoose);
const tweetStream = require('/tweetStream')(mongoose);

module.exports = {
    stockSnapshot,
    watchedStock,
    tweetStream
}