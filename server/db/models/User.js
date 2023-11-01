const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        // required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: "firstname",
        // required: true,
    },
    lastName: {
        type: String,
        default: "lastname",
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String,
        // required: true,
    },
    hired: {
        type: Number,
        // required: true,
    },
    telephone: {
        type: Number,
        // required: true,
    
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
    
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)
