import store from "../redux/store"
import actions from "../redux/actions"
import API from "../api"

export default {
    setIsAuth: ()=>{
        sessionStorage.setItem("isAuth", JSON.stringify(true))
    },
    setNotAuth: ()=>{
        sessionStorage.setItem("isAuth", JSON.stringify(false))
    },
    getSetAuth: async ()=>{
        let isAuth = await JSON.parse(sessionStorage.getItem("isAuth"))
        if(isAuth){
            store.dispatch(actions.setAuth())
            API.getUser()
        } 
    },
    setMessage: (message)=>{
        sessionStorage.setItem("adminMsg", JSON.stringify(message))
    },
    unsetMessage: ()=>{
        sessionStorage.setItem("adminMsg", JSON.stringify(null))
    },
    getAdminMsg: async ()=>{
        let message = await JSON.parse(sessionStorage.getItem("adminMsg"))
        if(message){
            store.dispatch(actions.setAdminMessage(message))
        }
    }
}