const router = require("express").Router()
const controllers = require("../controllers")

router.route("/addpost").post(controllers.ensureAuthenticated, controllers.addAPost)

router.route("/deletepost").post(controllers.ensureAuthenticated, controllers.deleteAPost)

router.route("/updatepost").post(controllers.ensureAuthenticated, controllers.updateApost)

router.route("/getallposts").post(controllers.ensureAuthenticated, controllers.getAllPosts)


router.route("/sendmessage").post(controllers.sendAMessage)

router.route("/updatemessage").post(controllers.updateAMessage)

router.route("/deletemessage").post(controllers.deleteAMessage)

router.route("/getallusers").post(controllers.ensureAuthenticated, controllers.getAllUsers)

module.exports = router