const express = require('express');
const router = express.Router();

const Trip = require('../models/trip')
const checkLogin = require('../utils/ensureLoggedIn')



////routes & controllers



    



//create
router.post('/:tripId', checkLogin, (req, res)=>{
    req.body.author = req.user._id
    console.log(req.body)
    Trip.findById(req.params.tripId)
        .then(trip => {
            trip.stops.push(req.body)
            return trip.save()
        })
        .then(trip => {
            res.redirect(`/trips/${trip._id}`)
        })
        .catch(error => console.error)
  
})



///edit
router.get('/edit/:id', checkLogin, (req, res) =>{
    Trip.findById(req.params.id)
 res.send('edit page')
})

///update
router.patch('/:id', checkLogin, (req, res)=>{
    res.send('edit stop page')

} )

///delete
router.delete('/:trip_Id/:stops_Id', checkLogin, (req, res) => {
    const tId = req.params.trip_Id
    const sId = req.params.stops_Id

    Trip.findById(tId)
        .then(trip => {
            const theStop = trip.stops.id(sId)

            if (req.user && theStop.author == req.user.id){
                theStop.deleteOne()

            return trip.save()
        } else {
            res.send('something went wrong')
        }
        })
        .then(trip => {
            res.redirect(`/trips/${trip._id}`)
        })
        .catch(error => console.error)


    })
    



module.exports= router