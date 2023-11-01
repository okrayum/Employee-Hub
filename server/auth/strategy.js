const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const User = require("../db/models").User

module.exports = function (passport) {

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(doc => done(null, doc))
      .catch(err => console.log(err))
  });

  passport.use("login",
    new LocalStrategy({ usernameField: 'userName' }, (userName, password, done) => {

      User
        .findOne({ userName })
        .then(user => {

          if (!user) {
            // console.log("NO USER!")
            return done(null, false);
          }
          if (!bcrypt.compareSync(password, user.password)) {
            console.log("ACCESS DENIED!")
            return done(null, false);
          }
          // console.log("USER! ", user)
          return done(null, user);
        }).catch(err => console.log(err))
    })
  )

  // passport.use('admin',
  //   new LocalStrategy((username, password, done) => {
  //     let adminPassword = bcrypt.hashSync("password", 10)
  //         if (username !== "admin") {
  //           return done(null, false, { message: "password or username do not match database." });
  //         }
  //         if (!bcrypt.compareSync(password, adminPassword)) {
  //           return done(null, false, { message: "password or username do not match database." });
  //         }
  //         return done(null, true);
  //       })
  // );
}