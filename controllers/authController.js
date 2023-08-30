const express = require('express');
const router = express.Router();
const passport = require('passport')

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // we'll tell which strategy to use
    'google',
    {
    // this requests the user's profile and email
    scope: ['profile', 'email']
    }
))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
    successRedirect: '/',
    failureRedirect: '/'
    }
))

// OAuth logout route
router.get('/logout', function(req, res) {
    req.logout(function() {
        res.redirect('/')
    })
})

module.exports = router;