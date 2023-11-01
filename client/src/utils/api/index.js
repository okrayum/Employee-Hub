import authApi from "./authApi"
import appApi from "./appApi"

export default {
    login: authApi.apiLogin,
    getUser: appApi.apiGetUser,
    addPost: appApi.apiAddPost,
    deletePost: appApi.apiDeletePost,
    editPost: appApi.apiEditPost,
    updateUser: authApi.apiUpdateUser,
    logoutUser: authApi.apiLogoutUser,
    deleteUser: authApi.apiDeleteUser,
    registerUser: authApi.apiRegisterUser,
    getAllPosts: appApi.apiGetAllPosts,
    checkAuth: authApi.apiCheckAuth,
    getAllUsers: appApi.apiGetAllUsers,
    adminDeleteUser: authApi.apiAdminDeleteUser,
    updateUserandPosts: authApi.updateAndGetUsersAndPosts
}