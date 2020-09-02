const stockSnapshot = (mongoose) => {
    let StockSnapshot = new mongoose.Schema({
        stock: { 
            type: String,
            required: true
        },
        open: {
            required: true,
            type: Number
        },
        high: {
            required: true,
            type: Number
        },
        low: {
            required: true,
            type: Number
        },
        close: {
            required: true,
            type: Number
        },
        volume: {
            required: true,
            type: Number
        },
        date: {
            required: true,
            type: Number
        }
    });

    return mongoose.model('StockSnapshot', StockSnapshot)
}

module.exports = stockSnapshot;