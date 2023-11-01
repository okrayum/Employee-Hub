import { getAllUsers, closeEditModal, getAllPosts, getUser, handleAppChange, startEditPost, startEditMessage, openAddModal, closeAddModal, clearApp } from "./appActions";
import { toggleModal, openUserModal, closeUserModal, handleAuthChange, prepareToUpdateUser, unauthorize, authorized, sendAuthMessage, toggleLogin, openDeleteConfirmModal, closeDeleteConfirmModal, getAuthUser } from "./authActions"

export default {
    getUser,
    handleAppChange,
    startEditPost,
    startEditMessage,
    openAddModal,
    closeAddModal,
    openUserModal,
    closeUserModal, 
    handleAuthChange,
    prepareToUpdateUser,
    unauthorize,
    authorized,
    clearApp, 
    sendAuthMessage, 
    toggleLogin,
    openDeleteConfirmModal,
    closeDeleteConfirmModal,
    getAllPosts,
    closeEditModal,
    getAllUsers,
    getAuthUser, 
    toggleModal
}