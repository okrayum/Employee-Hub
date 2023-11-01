import rootReducer from "./reducers"
import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store