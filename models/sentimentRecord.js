const sentimentRecord = (mongoose) => {
    let SentimentRecord = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId ,
        text: {
            type: String,
            required: true
        },
        sentimentScore: {
            type: Number,
            required: true
        }
    })  

    return mongoose.model('SentimentRecord', SentimentRecord);
};
module.exports = sentimentRecord;