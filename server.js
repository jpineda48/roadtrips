const express = require('express')
require('dotenv').config()
const path = require('path')
const middleware = require('./utils/middleware')


const AuthRouter = require('./controllers/authController')
const tripsRouter = require('./controllers/tripsController')
const stopsRouter = require('./controllers/stopsControllers')


const app = express()

// set up our view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/////////////////////
//// Middleware  ////
/////////////////////
middleware(app)

/////routes
app.use('/', AuthRouter)
app.use('/trips', tripsRouter)
app.use('/stops', stopsRouter)



app.get('/' ,(req, res)=>{
    res.redirect('/trips')

})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('fruit app is ready to go')
})