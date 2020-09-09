const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/watchedStocks`, (err) => {
	if (err) {
		console.log(`Err: ${err}`)
	} else {
		console.log('Successfully connected to Mongo');
	}
});

const StockSnapshot = require('./models/stockSnapshot')(mongoose);
const WatchedStock = require('./models/watchedStock')(mongoose);
const TweetStream = require('./models/tweetStream')(mongoose);

module.exports = {
    StockSnapshot,
	WatchedStock,
	TweetStream
}