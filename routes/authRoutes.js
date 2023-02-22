const passport = require("passport");

module.exports = (app) => {
    app.use('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.use('/auth/google/callback', passport.authenticate('google'));
}
