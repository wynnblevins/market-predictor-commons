const watchedStock = (mongoose) => {
    let WatchedStock = new mongoose.Schema({
        stock: { 
            type: String,
            required: true
        },
        interavalId: {
            type: String
        },
        running: {
            type: Boolean,
        }
    });    

    return mongoose.model('WatchedStock', WatchedStock);
}

module.exports = watchedStock;