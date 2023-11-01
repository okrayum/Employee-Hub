const User = require("../db/models").User
const Post = require("../db/models").Post
const Message = require("../db/models").Post

const formatTelephone = require("../functions/formatTele2")

module.exports = {
    getAUser: (req, res) => {
        // console.log("LANDING REQ ", req.user)
        // let _id = "6421c35b1929a9b0c4800b9d"
        // let _id = req.body._id
        User
            .findById({ _id: req.user._id })
            .populate("posts")
            .populate("messages")
            .select("-password")
            .exec()
            .then(data => {
                let formatted = formatTelephone(data.telephone)
                data = {
                    ...data._doc,
                    telephone: formatted
                }
                res.json(data)
            })
            .catch(err => console.log(err))

    }
}