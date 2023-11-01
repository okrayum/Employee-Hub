const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")
const auth = require("./auth")
const helmet = require("helmet")
const config = require("./utils/config")

// const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
app.use(cors(config.cors))


auth(app)


// app.use((req, res, next)=> {
//     console.log("SERVER ", req.session)
//     console.log("SERVER2 ", req.user)
//     next()
// })

app.use(routes)


require("./db")(app)
// app.listen(PORT, () => console.log(`Ear hustlers listen on port ${PORT}`))

module.exports = app