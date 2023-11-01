const session = require("express-session")
const passport = require("passport")
const config = require("../utils/config")

module.exports = function (app) {
    app.use(session(config.session));
    app.use(passport.initialize());
    app.use(passport.session());
    require("./strategy")(passport)
}