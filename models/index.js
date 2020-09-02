const mongoose = require('mongoose');

const stockSnapshot = require('./stockSnapshot')(mongoose);
const watchedStock = require('./watchedStock')(mongoose);

module.exports = {
    stockSnapshot,
    watchedStock
}