const TweetStream = (mongoose) => {
    let TweetStream = new mongoose.Schema({
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
    });    

    return mongoose.model('TweetStream', TweetStream);
}
