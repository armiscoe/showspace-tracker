const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    venue: {
        type: String,
        required: true
    },
    band: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },

    date: {
        type: Date,
        required: false
    }
});

module.exports = Show = mongoose.model('show', ShowSchema);