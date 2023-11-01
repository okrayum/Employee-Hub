const authControllers = require("./authControllers")
const appControllers = require("./appControllers")
const landingControllers = require("./landingControllers")
require("../db")

module.exports = {

    ensureAuthenticated: authControllers.ensureAuthenticated,
    registerAUser: authControllers.registerAUser,
    loginAUser: authControllers.loginAUser,
    updateAUser: authControllers.updateAUser,
    deleteAUser: authControllers.deleteAUser,
    logoutAUser: authControllers.logoutAUser,
    // getAuthUser: authControllers.getAuthUser,
    checkAuthStatus: authControllers.checkAuthStatus,
    adminDeleteAUser: authControllers.adminDeleteAUser,

    addAPost: appControllers.addAPost,
    deleteAPost: appControllers.deleteAPost,
    updateApost: appControllers.updateAPost,
    getAllPosts: appControllers.getAllPosts,
    getAllUsers: appControllers.getAllUsers,

    sendAMessage: appControllers.sendAMessage,
    updateAMessage: appControllers.updateAMessage,
    deleteAMessage: appControllers.deleteAMessage,

    getAUser: landingControllers.getAUser,
    
}