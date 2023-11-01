const router = require("express").Router()
const controllers = require("../controllers")

router.route("/register").post(controllers.registerAUser)

router.route("/login").post(controllers.loginAUser)

router.route("/update").post(controllers.ensureAuthenticated, controllers.updateAUser)

router.route("/delete").post(controllers.ensureAuthenticated, controllers.deleteAUser)

router.route("/logout").post(controllers.logoutAUser)

router.route("/checkauth").post(controllers.checkAuthStatus)

router.route("/admindelete").post(controllers.ensureAuthenticated, controllers.adminDeleteAUser)

// router.route("getauthuser").post(controllers.getAuthUser)

module.exports = router