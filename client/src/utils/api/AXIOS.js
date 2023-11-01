import axios from "axios"
const URL = process.env.REACT_APP_URL

const instance = axios.create({
    withCredentials: true,
    baseURL: URL
})


export default instance