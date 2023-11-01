if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const mongoose = require("mongoose")

module.exports = (app)=> {
    mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log("The mongoose is on the loose!")
        app.listen(process.env.PORT, ()=> console.log(`Tiny ears listen on port ${process.env.PORT}`))
    })

}



// const MONGO_URI = process.env.MONGO_URI

// mongoose.connect(MONGO_URI).then(() => console.log("Duck duck goose..."))