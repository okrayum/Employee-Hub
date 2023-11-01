const User = require("../db/models").User
const Post = require("../db/models").Post
const Message = require("../db/models").Message

const bcrypt = require("bcryptjs")
const passport = require("passport")

const verify = require("../functions/verify").verify
const verifyEmail = require("../functions/verify").verifyEmail
const verifyPhone = require("../functions/verify").verifyPhone
const verifyPassword = require("../functions/verify").verifyPassword
const verifyYear = require("../functions/verify").verifyYear

const returnNumber = require("../functions/returnNum")
// const formatTelephone = require("../functions/formatTele")

module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next()
        }
        return res.json({ message: "Not authenticated." })
    },
    registerAUser: (req, res) => {

        let { firstName, lastName, email, password1, password2, department, hired, telephone, role, userName } = req.body

        User.findOne({ userName }).then(data => {
            if (data) {
                return res.json({ message: `${userName} is already in use.` })

            } else {

                if (!verifyPassword(password1)) {

                    return res.json({ message: "Please make password 6-25 characters with atleast 1 number and 1 symbol." })

                } else if (telephone && !verifyPhone(telephone) && email && !verifyEmail(email)) {
                    return res.json({ message: "Please check your telephone number and email address." })

                } else if (email && !verifyEmail(email)) {
                    return res.json({ message: "Please check your email address." })

                } else if (telephone && !verifyPhone(telephone)) {
                    return res.json({ message: "Please check your telephone number." })

                } else if (hired && !verifyYear(hired)) {
                    return res.json({ message: "Please enter a 4 digit year." })

                } else {

                    telephone = returnNumber(telephone)

                    let user = Object.assign({}, { firstName, lastName, email, department, hired, telephone, role, userName })


                    if (password1 !== password2) {
                        return res.json({ message: "The passwords do not match." })
                    }

                    User.findOne({ email }).then(data => {
                        if (!data) {
                            user.password = bcrypt.hashSync(password1, 10)
                            let newUser = new User(user)
                            newUser
                                .save()
                                .then(data => {
                                    req.login(data, (err) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        return res.status(200).json({ message: "User logged in.", user })
                                    })
                                })
                                .catch(err => console.log(err))

                        } else {
                            return res.json({ message: `${email} is already registered in the database.` })
                        }
                    }).catch(err => console.log(err))
                }
            }
        })
    },
    loginAUser: (req, res, next) => {
        passport.authenticate("login", (err, user, info) => {
            if (err) {
                console.log("Failed login", err)
                info = { message: "Failed login" }
                return res.json(info)
            }
            if (user === false) {
                // for testing
                // info = { message: "password or email do not match database" }
                info = { message: "please check password or register to sign in." }
                return res.json(info)
            } else {
                req.login(user, (err) => {
                    if (err) {
                        res.status(500).json({ message: 'Session save went bad.' });
                        return;
                    }
                    // console.log(req.session.passport.user)
                    res.status(200).json({ errors: false, message: "User is logged in!", user });
                });
            }
        })(req, res, next)
    },
    //  async??
    updateAUser: async (req, res) => {
        // out of testing use req.user._id

        // left off updating user

        let { firstName, lastName, email, department, hired, telephone, password1, password2, userName, role } = req.body

        if (password1 && !verifyPassword(password1)) {

            return res.json({ message: "Please make password 6-25 characters with atleast 1 number and 1 symbol." })

        } else if (telephone && !verifyPhone(telephone) && email && !verifyEmail(email)) {

            return res.json({ message: "Please check your telephone number and email address." })

        } else if (email && !verifyEmail(email)) {
            return res.json({ message: "Please check your email address." })

        } else if (telephone && !verifyPhone(telephone)) {
            console.log("TELEPHONE ", telephone)
            return res.json({ message: "Please check your telephone number." })

        } else if (hired && !verifyYear(hired)) {
            return res.json({ message: "Please enter a 4 digit year." })

        } else {

            // if(userName !== req.user.userName){
            //     console.log("USERNAME ", userName)
            //     User.find({userName}).then(data => {
            //         if(data){
            //             return res.json({ message: `${userName} is already in use.` })

            //         } else if(!data){
            //             updatedUser.userName = userName

            //         }
            //     })
            // }

            telephone = returnNumber(telephone)

            let updatedUser = Object.assign({}, { _id: req.user._id, firstName, lastName, department, hired, telephone, role })


            if (password1 && password1 !== password2) {
                return res.json({ message: "The passwords don't match" })
            }

            if (password1) {
                let passwordCheck = await User.findById({ _id: req.user._id })
                    .then(data => bcrypt.compareSync(password1, data.password))
                    .catch(err => console.log(err))
                // console.log("PSWDCHECK ", passwordCheck)
                if (!passwordCheck) {
                    updatedUser.password = bcrypt.hashSync(password1, 10)
                    console.log(updatedUser)
                }
            }

            const checkUser = async (obj, name, mail, userName, email) => {
                let msg
                if (!name || name === userName) {
                    obj.userName = userName
                } else if (name !== userName) {
                    let username = await User
                        .findOne({ userName: name })
                        .then(data => {
                            if (!data) {
                                return true
                            } else {
                                return false
                                //return res.json({ message: `${name} is already inuse.` })
                            }
                        })
                        .catch(err => console.log(err))
                    if (username) {
                        obj.userName = name
                    } else {
                        msg = { message: `${name} is already in use.` }
                        return msg
                    }
                }

                if (!mail || mail === email) {
                    obj.email = email
                } else if (mail !== email) {
                    let mmail = await User.findOne({ email: mail })
                        .then(data => {
                            if (!data) {
                                return true
                                // return obj.email = mail
                            } else {
                                return false
                                // return res.json({ message: `${email} is already inuse.` })
                            }
                        }).catch(err => console.log(err))
                    if (mmail) {
                        obj.email = mail
                    } else {
                        msg = { message: `${email} is already in use.` }
                        return msg
                    }
                }
                if (msg) {
                    return msg
                } else {
                    // console.log("OBJECT ", obj)
                    return obj
                }
            }
            let checkedUser = await checkUser(updatedUser, userName, email, req.user.userName, req.user.email)
            if (!Object.keys(checkedUser).includes("message")) {
                updatedUser = Object.assign(updatedUser, checkedUser)
                return User
                    .findByIdAndUpdate({ _id: req.user._id }, updatedUser, { new: true })
                    .populate("posts")
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            } else {
                return res.json(checkedUser)
            }





            // if (!userName || userName === req.user.userName) {
            //     updatedUser.userName = req.user.userName
            // } else if (userName !== req.user.userName) {
            //     await User
            //         .findOne({ userName })
            //         .then(data => {
            //             if (!data) {
            //                 updatedUser.userName = userName
            //             } else {
            //                 return res.json({ message: `${userName} is already inuse.` })
            //             }
            //         })
            //         .catch(err => console.log(err))
            // }

            // if (!email || email === req.user.email) {
            //     updatedUser.email = req.user.email
            // } else if (email !== req.user.email) {
            //     await User.findOne({ email })
            //         .then(data => {
            //             if (!data) {
            //                 updatedUser.email = email
            //             } else {
            //                 return res.json({ message: `${email} is already inuse.` })
            //             }
            //         }).catch(err => console.log(err))
            // }
            //     User
            //         .find({})
            //         .sort({ "department": 1, "lastName": 1 })
            //         .select("-password")
            //         .exec()
            //         .then(data => {
            //             Post
            //                 .find({})
            //                 .populate({ path: "userId" })
            //                 .sort({ "createdAt": -1 })
            //                 .select("-password")
            //                 .exec()
            //                 .then(data => res.json(data))
            //                 .catch(err => console.log(err))
            //         }).catch(err => console.log(err))
            // }).catch(err => console.log(err))



        }
    },


    adminDeleteAUser: (req, res) => {
        // console.log("REQBODYID ", req.body._id)
        User.findById({ _id: req.body._id }).then(data => {
            if (data.posts) {
                let _id = data.posts
                Post.deleteMany({ _id }).then(data => {
                    console.log("posts have been deleted")
                }).catch(err => console.log(err))
            }
            if (data.messages) {
                let _id = data.messages
                Message.deleteMany({ _id }).then(data => {
                    console.log("messages have been deleted")
                }).catch(err => console.log(err))
            }
            User.findByIdAndDelete({ _id: req.body._id })
                .then(data => {
                    // console.log("ADMIN DELETE ", data)
                    User
                        .find({})
                        .sort({ "department": 1, "lastName": 1 })
                        .select("-password")
                        .exec()
                        .then(data => {
                            res.json(data)
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        })
    },
    deleteAUser: (req, res) => {
        // for testing
        // _id = req.body._id
        // console.log("REQUSERID ", req.user._id)


        let userId = req.user._id
        User.findById({ _id: userId }).then(data => {
            if (data.posts) {
                let _id = data.posts
                Post.deleteMany({ _id }).then(data => {
                    console.log("posts have been deleted")
                }).catch(err => console.log(err))
            }
            if (data.messages) {
                let _id = data.messages
                Message.deleteMany({ _id }).then(data => {
                    console.log("messages have been deleted")
                }).catch(err => console.log(err))
            }
            req.logout(err => {
                if (err) { console.log(err) }
                User.findByIdAndDelete({ _id: userId }).then(data => {
                    // req.logout(err => {
                    //     console.log("UNDEFINED?? ", err)
                    // })
                    console.log("DELETED ", data)
                    return res.status(200).json({ message: "User has been deleted and logged out" })
                })
            })

        })
    },
    logoutAUser: (req, res, next) => {
        req.logout((err) => {
            if (err) {
                console.log(err)
            }
            return res.json({ message: "User has been logged out" })
        })
    },
    checkAuthStatus: (req, res) => {
        if (req.isAuthenticated()) {
            let { userName, firstName, lastName, email, telephone, hired, department, role, _id } = req.user
            return res.status(200).json({ user: { userName, firstName, lastName, email, telephone, hired, department, role, _id } })
        } else {
            return res.status(202).json({ message: "NO user!" })

        }
    }

}