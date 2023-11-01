import instance from "./AXIOS"
import { AUTH, APP, LANDING } from "./REQUEST"
import store from "../redux/store"
import actions from "../redux/actions"
// import storage from "../storage"
import axios from "axios"


// const apiLogin = async (userObj) => await instance
//     // .post(AUTH + "login", { email: "testuser2@mail.com", password: "password" })
//     .post(AUTH + "login", userObj)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))

const apiLogin = async (userObj) => await instance
    .post(AUTH + "login", userObj)
    .then(res => {
        if (res.data.errors === false) {
            // storage.setIsAuth()
            store.dispatch(actions.authorized())
        } else if (res.data.message) {
            store.dispatch(actions.sendAuthMessage(res.data.message))
        }
    })
    .catch(err => console.log(err))

const apiUpdateUser = async (newUser) => await instance
    .post(AUTH + "update", newUser)
    .then(res => {
        // console.log("UPDATE RREESS ", res.data)

        if (res.data.errors === false) {
            // storage.setIsAuth()


            store.dispatch(actions.getUser(res.data))

        } else if (res.data.message) {

            store.dispatch(actions.sendAuthMessage(res.data.message))
        }
    })
    .catch(err => console.log(err))

const apiDeleteUser = async () => await instance
    .post(AUTH + "delete", {})
    .then(res => {
        // console.log("AAPPII ", res.data.message)
        store.dispatch(actions.unauthorize())
        store.dispatch(actions.sendAuthMessage(res.data.message))
    })
    .catch(err => console.log(err))

const apiAdminDeleteUser = async (_id) => await instance
    .post(AUTH + "admindelete", { _id })
    .then(res => {
        store.dispatch(actions.getAllUsers(res.data))
    })
    .catch(err => console.log(err))

const apiLogoutUser = async () => await instance
    .post(AUTH + "logout", {})
    .then(res => {
        // storage.setNotAuth()
        store.dispatch(actions.unauthorize())
        store.dispatch(actions.clearApp())
        sessionStorage.clear()
    })
    .catch(err => console.log(err))

const apiRegisterUser = async (newUser) => await instance
    .post(AUTH + "register", newUser)
    .then(res => {
        if (res.data.message === 'User logged in.') {
            store.dispatch(actions.authorized())
        } else if (res.data.message) {

            store.dispatch(actions.sendAuthMessage(res.data.message))
        }
    })
    .catch(err => console.log(err))

const apiCheckAuth = async () => await instance
    .post(AUTH + "checkauth", {})
    .then(res => {
        if (res.status === 200) {
            store.dispatch(actions.authorized())
        } else {
            store.dispatch(actions.unauthorize())
            store.dispatch(actions.clearApp())
        }
    })
    .catch(err => console.log(err))

const updateAndGetUsersAndPosts = async (newUser) => await axios.all([
    instance.post(AUTH + "update", newUser),
    instance.post(APP + "getallusers"),
    instance.post(APP + "getallposts"),
    instance.get(LANDING)
    
]).then(axios.spread((res1, res2, res3, res4) => {

    // console.log("data1 ", res1.data)
    if (res1.data.message !== undefined) {

        store.dispatch(actions.getAllUsers(res2.data))
        store.dispatch(actions.getAllPosts(res3.data))
        store.dispatch(actions.getUser(res4.data))
        store.dispatch(actions.sendAuthMessage(res1.data.message))

    } else {

        store.dispatch(actions.getAllUsers(res2.data))
        store.dispatch(actions.getAllPosts(res3.data))
        store.dispatch(actions.getUser(res4.data))
        store.dispatch(actions.closeUserModal())
    }


}))

export default {
    apiLogin,
    apiUpdateUser,
    apiDeleteUser,
    apiLogoutUser,
    apiRegisterUser,
    apiCheckAuth,
    apiAdminDeleteUser,
    updateAndGetUsersAndPosts
}