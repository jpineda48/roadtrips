const mongoose = require('../utils/connection')

// we'll destructure the Schema and model functions from mongoose
const { Schema } = mongoose



const stopsSchema = new Schema({
    food: {
        type: String
    },
    parks: {
        type: String
    },
    places: {
        type: String
    },
    people: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })


module.exports = stopsSchema