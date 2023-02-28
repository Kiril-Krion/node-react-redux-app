const passport = require("passport");

module.exports = (app) => {
    app.use('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.use('/auth/google/callback', passport.authenticate('google'),
    (req, res) => {
        res.redirect('/survey');
    }
    );
    app.use('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })
    app.use('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}
