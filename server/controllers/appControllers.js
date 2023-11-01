const { User, Post, Message } = require("../db/models")

module.exports = {
    addAPost: (req, res) => {
        let { title, body } = req.body
        let newPost = new Post({ userId: req.body._id, title, body })
        newPost
            .save()
            .then(data => {
                User
                    .findByIdAndUpdate({ _id: data.userId }, { $push: { "posts": data._id } }, { new: true })
                    // .populate("posts")
                    // .select("-password")
                    // .exec()
                    .then(data => {
                        Post.find({})
                            .populate({ path: "userId", sort: { "createdAt": -1 } })
                            .select("-password")
                            .exec()
                            .then(data => res.json(data))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }).catch(err => console.log(err))
    },
    deleteAPost: (req, res) => {
        // let { _id } = req.body
        Post
            .findByIdAndDelete({ _id: req.body._id })
            .then(data => {
                // console.log("DATA HERE! ", data)
                User.findByIdAndUpdate({ _id: data.userId }, { $pull: { "posts": data._id } }, { new: true })
                    // .populate("posts")
                    // .select("-password")
                    // .exec()
                    .then(data => {
                        Post
                            .find({})
                            .populate({ path: "userId" })
                            .sort({ "createdAt": -1 })
                            .select("-password")
                            .exec()
                            .then(data => res.json(data))
                            .catch(err => console.log(err))

                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    },
    updateAPost: (req, res, next) => {
        let { _id, title, body } = req.body
        Post
            .findByIdAndUpdate({ _id }, { title, body }, { new: true })
            .then(data => {
                Post.find({})
                    .populate({ path: "userId" })
                    .sort({ "createdAt": -1 })
                    .select("-password")
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    },
    sendAMessage: (req, res) => {
        let { message } = req.body
        let newMessage = new Message({ userId: req.body._id, message })
        newMessage
            .save()
            .then(data => {
                User
                    .findByIdAndUpdate({ _id: data.userId }, { $push: { "messages": data._id } }, { new: true })
                    .populate("messages")
                    .select("-password")
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    updateAMessage: (req, res, next) => {
        let { _id, message } = req.body
        Message
            .findByIdAndUpdate({ _id }, { message }, { new: true })
            .then(data => {
                User
                    .findByIdAndUpdate({ _id: data.userId })
                    .populate("messages")
                    .select("-password")
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    deleteAMessage: (req, res) => {
        Message
            .findByIdAndDelete({ _id: req.body._id })
            .then(data => {
                console.log("2nd DATA HERE! ", data)
                User.findByIdAndUpdate({ _id: data.userId }, { $pull: { "messages": data._id } }, { new: true })
                    .populate("messages")
                    .select("-password")
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    getAllPosts: (req, res) => {
        Post
            .find({})
            .populate({ path: "userId" })
            .sort({ "createdAt": -1 })
            .select("-password")
            .exec()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    getAllUsers: (req, res) => {
        User
            .find({})
            .sort({ "department": 1, "lastName": 1 })
            .select("-password")
            .exec()
            .then(data => {
                // console.log("DDAATTAA ", data)
                res.json(data)
            })
            .catch(err => console.log(err))

    },
    // from pugAddressBook.  needs to be refactored for this application
    findAContact: (req, res) => {
        let _id = req.params._id
        let { name } = req.body
        User.findById({ _id })
        .populate({ path: 'contacts', populate: { path: 'image'},options: { collation: {'locale': 'en'}, sort: { 'lastName': 1, 'firstName': 1 } } }).exec((err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (name) {
                    let contact = data.contacts.filter(item => {
                        return item.lastName.toLowerCase() === name.toLowerCase() || item.firstName.toLowerCase() == name.toLowerCase() || item.street.toLowerCase() == name.toLowerCase() || item.city.toLowerCase() == name.toLowerCase() || item.state.toLowerCase() == name.toLowerCase()
                    })
                    let user = {}
                    user._id = data._id
                    user.firstName = data.firstName
                    user.lastName = data.lastName
                    user.email = data.email
                    user.contacts = formatTelephone(contact)
                    return res.render('list', user)
                }
            }
        })
    }
}