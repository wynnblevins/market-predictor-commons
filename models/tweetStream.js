const tweetStream = (mongoose) => {
    let TweetStream = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        stock: { 
            type: String,
            required: true
        },
        searchTerm: {
            type: String,
            required: true
        },
        running: {
            type: Boolean,
            default: false
        }    
    })  

    return mongoose.model('TweetStream', TweetStream);
}

module.exports = tweetStream;