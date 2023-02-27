const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((existingUser) => {
        if(existingUser) {
            // we already have user
            done(null, existingUser);
        } else {
            // dont have user
            new User({ googleId: profile.id }).save().then(user => done(null, user));
        }
    });
}));




// Google keys <---------------------------------------->
// googleClientID = 45714252855-484qgbe184rcfuoj9v0i76puun22fpeb.apps.googleusercontent.com
// googleClientSecret = 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
