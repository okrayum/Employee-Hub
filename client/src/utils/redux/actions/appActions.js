import { GET_ALL_USERS, CLOSE_EDIT_MODAL, GET_USER, HANDLE_APP_CHANGE, START_EDIT_POST, START_EDIT_MESSAGE, OPEN_ADD_MODAL, CLOSE_ADD_MODAL, CLEAR_APP, GET_ALL_POSTS } from "../types"

export const getUser = (user) =>{
    return {
        type: GET_USER,
        payload: user
    }
}

export const handleAppChange = (input) =>{
    // console.log(input)
    return {
        type: HANDLE_APP_CHANGE,
        payload: input
    }
}

export const startEditPost = (post) => {
    return {
        type: START_EDIT_POST,
        payload: post
    }
}

export const startEditMessage = (message) => {
    return {
        type: START_EDIT_MESSAGE,
        payload: message
    }
}

export const openAddModal = () => {
    return {
        type: OPEN_ADD_MODAL
    }
}

// export const openEditModal = () => {
//     return {
//         type: OPEN_EDIT_MODAL
//     }
// }

export const closeAddModal = () => {
    return {
        type: CLOSE_ADD_MODAL
    }
}

export const closeEditModal = () => {
    return {
        type: CLOSE_EDIT_MODAL
    }
}

export const clearApp = () => {
    return {
        type: CLEAR_APP
    }
}

export const getAllPosts = (posts) => {
    return {
        type: GET_ALL_POSTS,
        payload: posts
    }
}

export const getAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        payload: users
    }
}