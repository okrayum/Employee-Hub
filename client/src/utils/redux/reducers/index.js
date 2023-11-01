import appReducer from "./appReducers"
import authReducer from "./authReducers"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export default rootReducer