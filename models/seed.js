const mongoose = require('../utils/connection')
const Trip = require('./trip')

///////////////////////////
//// Seed Script code  ////
///////////////////////////

// first we grab our db variable
const db = mongoose.connection
db.on('open', ()=>{
    const startTrips = [
        {departure: 'St. Petersburg', destination: 'Orlando' , duration: '1 day'},
        {departure: 'St. Petersburg' , destination: 'Atlanta', duration: '1 week'},
        {departure: 'St. Petersburg' , destination: 'Miami' , duration: '3 days'}
    ]

    Trip.create(startTrips)
    .then(data => {
        console.log('these are the trips: \n', data)
        db.close()
    })
    .catch(err => {
        console.log('something went wrong \n', err)
        db.close()
    })
})