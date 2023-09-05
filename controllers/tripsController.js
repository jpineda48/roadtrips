const express = require('express');
const router = express.Router();

const Trip = require('../models/trip')
const checkLogin = require('../utils/ensureLoggedIn')



////routes & controllers



    

///new
router.get('/new', checkLogin,  (req, res) =>{
   res.render('trips/new')
})

   // add essentials




//create
router.post('/', checkLogin, (req, res)=>{
    req.body.owner = req.user._id
    console.log("this is req.body", req.body)
    Trip.create(req.body)
        .then(trip => {
            res.redirect(`/trips/${trip._id}`)
        })
        .catch(err =>{
            console.log(err)
            red.redirect('trips/new')
        })
})




///edit
router.get('/edit/:id', checkLogin, (req, res) =>{
    Trip.findById(req.params.id)
    .then(trip => {
        console.log("found these trip", trip)
        res.render('trips/edit', { trip})
    })
    .catch(error => console.error)


})

///update
router.patch('/:id', checkLogin, (req, res)=>{
    Trip.findById(req.params.id)
    .then(trip => {
        if(req.user || fruit.owner == req.user.id){
            return trip.updateOne(req.body)
        } else {
            res.send('something went wrong')
        }
    })
    .then(data => {
        console.log('what is returned from update one', data)
        res.redirect('/trips')
    })
    .catch(error => console.error)

} )

///delete
router.delete('/:id', checkLogin, (req, res) => {
    ///find trip
    Trip.findById(req.params.id)
        .then(trip => {
            if(req.user || fruit.owner == req.user.id){
                return trip.deleteOne()
            } else {
                res.send('something went wrong')
            }
        })
        .then(data => {
            console.log('this is what is returned from deleted fruit', data)
            res.redirect('/trips')
        })
        .catch(error => console.error)
    ///delete trip
    ///redirect user
})

//show
router.get('/:id', (req, res) =>{
    Trip.findById(req.params.id)
    .populate('owner')
    .populate('stops.author')
    .then(trip => {
      
        res.render('trips/show',{trip, title: trip})
    })
    .catch(error => console.error)


})
///index
router.get('/', (req, res) =>{
    Trip.find({})
    .then(trips => {
        
        res.render('index', {trips, title: 'all trips'})
    })
    .catch(error => console.error)
})

//create
router.post('/:tripId', checkLogin, (req, res)=>{
    req.body.author = req.user._id
    console.log(req.body)
    Trip.findById(req.params.tripId)
        .then(trip => {
            trip.essentials.push(req.body)
            return trip.save()
        })
        .then(trip => {
            res.redirect(`/trips/${trip._id}`)
        })
        .catch(error => console.error)
  
})




module.exports= router