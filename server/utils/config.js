if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
const MongoStore = require("connect-mongo")

module.exports = {
    session: {
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            autoRemove: 'native'
        }),
        secret: process.env.SESSION_SECRET,  
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
        key: 'express.sid',
    },
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
        optionsSuccessStatus: 200
    }
}