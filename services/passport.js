const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    new User({ googleId: profile.id }).save();
}));




// Google keys <---------------------------------------->
// googleClientID = 45714252855-484qgbe184rcfuoj9v0i76puun22fpeb.apps.googleusercontent.com
// googleClientSecret = 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
