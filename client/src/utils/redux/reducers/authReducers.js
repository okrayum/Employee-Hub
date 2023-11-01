import { TOGGLE_MODAL, OPEN_USER_MODAL, CLOSE_USER_MODAL, HANDLE_AUTH_CHANGE, PREPARE_TO_UPDATE_USER, UNAUTHORIZE, AUTHORIZED, SEND_AUTH_MESSAGE, TOGGLE_LOGIN, OPEN_DELETE_CONFIRM_MODAL, CLOSE_DELETE_CONFIRM_MODAL, GET_AUTH_USER } from "../types"

let initialState = {
    isAuth: false,
    openModal: false,
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    password1: "",
    password2: "",
    password: "",
    role: "",
    hired: "",
    telephone: "",
    authMessage: "",
    login: true,
    openDeleteConfirmModal: false,
    deleteUserId: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_AUTH_USER:
        //     let { userName, firstName, lastName, email, hired, telephone, role, posts, messages, _id, department } = action.payload
        //     return {
        //         ...state,
        //         user: Object.assign(state.user, { department, userName, firstName, lastName, email, hired, telephone, role, _id }),

        //     }
        case OPEN_USER_MODAL:
            return {
                ...state,
                openModal: true,
                authMessage: "",
                openDeleteConfirmModal: false
            }
        case CLOSE_USER_MODAL:
            return {
                ...state,
                openModal: false,
                userName: "",
                firstName: "",
                lastName: "",
                email: "",
                telephone: "",
                hired: "",
                role: "",
                department: "",
                password1: "",
                password2: "",
                password: "",
                authMessage: "",
                isEdit: false

            }
        case OPEN_DELETE_CONFIRM_MODAL:
            return {
                ...state,
                openDeleteConfirmModal: true,
                // openModal: false,    // changed here 1st
                authMessage: "",
                deleteUserId: action.payload
            }
        case CLOSE_DELETE_CONFIRM_MODAL:
            return {
                ...state,
                openDeleteConfirmModal: false,
                openModal: false,     //changed here  2nd
                deleteUserId: ""

            }
        case HANDLE_AUTH_CHANGE:
            // console.log("PPAAYY ", action.payload)
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case PREPARE_TO_UPDATE_USER:
            return {
                ...state,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                telephone: action.payload.telephone,
                hired: action.payload.hired,
                department: action.payload.department,
                role: action.payload.role,
                password1: "",
                password2: ""
            }
        case UNAUTHORIZE:
            return {
                ...state,
                isAuth: false,
                openModal: false,
                userName: "",
                firstName: "",
                lastName: "",
                email: "",
                department: "",
                hired: "",
                role: "",
                telephone: "",
                password1: "",
                password2: "",
                login: true,
                password: ""
            }
        case AUTHORIZED:
            return {
                ...state,
                isAuth: true,
                openModal: false,
                // login: true,
            }
        case SEND_AUTH_MESSAGE:
            return {
                ...state,
                openModal: true,
                // login: true,
                authMessage: action.payload,
            }
        case TOGGLE_LOGIN:
            return {
                ...state,
                login: !state.login,
                authMessage: ""
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                openModal: true
            }

        default:
            return state
    }
}

export default authReducer