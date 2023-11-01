import { TOGGLE_MODAL, GET_AUTH_USER, OPEN_USER_MODAL, CLOSE_USER_MODAL, PREPARE_TO_UPDATE_USER, HANDLE_AUTH_CHANGE, UNAUTHORIZE, AUTHORIZED, SEND_AUTH_MESSAGE, TOGGLE_LOGIN, OPEN_DELETE_CONFIRM_MODAL, CLOSE_DELETE_CONFIRM_MODAL } from "../types"

export const openUserModal = () => {
    return {
        type: OPEN_USER_MODAL
    }
}

export const closeUserModal = () => {
    return {
        type: CLOSE_USER_MODAL
    }
}

export const handleAuthChange = (input) => {
    return {
        type: HANDLE_AUTH_CHANGE,
        payload: input
    }
}

export const prepareToUpdateUser = (user) => {
    return {
        type: PREPARE_TO_UPDATE_USER,
        payload: user
    }
}

export const unauthorize = () => {
    return {
        type: UNAUTHORIZE
    }
}

export const authorized = () => {
    return {
        type: AUTHORIZED
    }
}

export const sendAuthMessage = (message) => {
    return { 
        type: SEND_AUTH_MESSAGE,
        payload: message
    }
}

export const toggleLogin = () =>{
    return {
        type: TOGGLE_LOGIN,
    }
}

export const openDeleteConfirmModal = (id) => {
    return {
        type: OPEN_DELETE_CONFIRM_MODAL,
        payload: id
    }
}

export const closeDeleteConfirmModal = () => {
    return {
        type: CLOSE_DELETE_CONFIRM_MODAL
    }
}

export const getAuthUser = (user) => {
    return {
        type: GET_AUTH_USER,
        payload: user
    }
}

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}