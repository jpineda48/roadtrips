// we're going to bring in the mongoose connection from our utils
const mongoose = require('../utils/connection')
// import our commentSchema, to use as a subdocument
const commentSchema = require('./stop')

// we'll destructure the Schema and model functions from mongoose
const { Schema, model } = mongoose

const tripSchema = new Schema({
    departure: {
        type: String
    },
    destination: {
        type: String
    },
    duration: {
        type: Boolean
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    stops: [stopsSchema]
}, { timestamps: true })


const Trips = model('Trip', tripSchema)

//////////////////////////
//// Export our Model ////
//////////////////////////
module.exports = Fruit