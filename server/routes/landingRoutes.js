const router = require("express").Router()
const controllers = require("../controllers")

router.route("/").get(controllers.ensureAuthenticated, controllers.getAUser)

module.exports = router