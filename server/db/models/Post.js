const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
},{
    timestamps: true,
    timeseries: true
})

module.exports = mongoose.model("Post", postSchema)