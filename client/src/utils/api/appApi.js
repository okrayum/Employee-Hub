import instance from "./AXIOS"
import { LANDING, APP } from "./REQUEST"
import store from "../redux/store"
import actions from "../redux/actions"
// import storage from "../storage"

const apiGetUser = async () => await instance
    .get(LANDING)
    .then(res => store.dispatch(actions.getUser(res.data)))
    .catch(err => console.log(err))

const apiAddPost = async (post) => await instance
    .post(APP + "addpost", post )
    .then(res => store.dispatch(actions.getAllPosts(res.data)))
    .catch(err => console.log(err))

const apiDeletePost = async (_id) => await instance
    .post(APP + "deletepost", { _id })
    .then(res => store.dispatch(actions.getAllPosts(res.data)))
    .catch(err => console.log(err))

const apiEditPost = async (post) => await instance
    .post(APP + "updatepost",  post )  
    .then(res => {
        store.dispatch(actions.getAllPosts(res.data))})  
    .catch(err => console.log(err))

// api get all posts
const apiGetAllPosts = async ()  => await instance
    .post(APP + "getallposts")
    .then(res => {
        store.dispatch(actions.getAllPosts(res.data))
        // store.dispatch(actions)
    })  
    .catch(err => console.log(err))

// api get all users for directory   
const apiGetAllUsers = async () => await instance
        .post(APP + "getallusers")
        .then(res => {
            store.dispatch(actions.getAllUsers(res.data))})
        .catch(err => console.log(err))


export default { apiGetUser, apiAddPost, apiDeletePost, apiEditPost, apiGetAllPosts, apiGetAllUsers }