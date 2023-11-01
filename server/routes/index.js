const router = require("express").Router()
const authRoutes = require("./authRoutes")
const appRoutes = require("./appRoutes")
const landingRoutes = require("./landingRoutes")

router.use("/auth", authRoutes)

router.use("/app", appRoutes)

router.use("/", landingRoutes)

module.exports = router