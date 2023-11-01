import { GET_ALL_USERS, CLOSE_EDIT_MODAL, GET_ALL_POSTS, GET_USER, HANDLE_APP_CHANGE, START_EDIT_POST, START_EDIT_MESSAGE, OPEN_ADD_MODAL, CLOSE_ADD_MODAL, CLEAR_APP } from "../types"
let initialState = {
    user: {},
    posts: [],
    messages: [],
    post: "",
    title: "",
    body: "",
    message: "",
    editId: "",
    editPostTitle: "",
    editPostBody: "",
    editMessage: "",
    isEdit: false,
    openAddModal: false,
    allPosts: [],
    allUsers: [], 
    user: ""
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            let { userName, firstName, lastName, email, hired, telephone, role, posts, messages, _id, department } = action.payload
            return {
                ...state,
                user: Object.assign(state.user, { posts, messages, department, userName, firstName, lastName, email, hired, telephone, role, _id }),
                post: "",
                message: "",
                isEdit: false,
                editPost: "",
                editMessage: "",
                editId: "",
                posts,
                messages
            }
        case HANDLE_APP_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case START_EDIT_POST:
            return {
                ...state,
                isEdit: true,
                editPostTitle: action.payload.title,
                editPostBody: action.payload.body,
                editId: action.payload._id,
            }
        case START_EDIT_MESSAGE:
            return {
                ...state,
                isEdit: true,
                editMessage: action.payload.message,
                editId: action.payload._id,
                openEditModal: true
            }
        case OPEN_ADD_MODAL:
            return {
                ...state,
                openAddModal: true
            }
        // case OPEN_EDIT_MODAL:
        //     console.log("HHIITT")
        //     return {
        //         ...state,
        //         openEditModal: true
        //     }
        case CLOSE_ADD_MODAL:
            return {
                ...state,
                openAddModal: false,
                title: "",
                body: ""
            }
        case CLOSE_EDIT_MODAL:
            return {
                ...state,
                isEdit: false,
                title: "",
                body: ""
            }
        case CLEAR_APP:
            return {
                ...state,
                user: {},
                posts: [],
                messages: []

            }
        case GET_ALL_POSTS:
            return {
                ...state,
                allPosts: [...action.payload],
                post: "",
                title: "",
                body: "",
                message: "",
                isEdit: false,
                editPost: "",
                editMessage: "",
                editId: "",

            }
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: [...action.payload],
                // user: ""

            }
        default:
            return state
    }
}

export default appReducer