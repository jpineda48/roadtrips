const express = require('express');
const router = express.Router();

const Trip = require('../models/trip')
const checkLogin = require('../utils/ensureLoggedIn')



////routes & controllers



    



//create
router.post('/:tripId', checkLogin, (req, res)=>{
    req.body.author = req.user._id
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
router.delete('/:id', checkLogin, (req, res) => {
  res.send('delete/stop')
})


module.exports= router