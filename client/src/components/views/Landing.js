import React from "react"
import { connect } from "react-redux"
import API from "../../utils/api"
import actions from "../../utils/redux/actions"
import "../../styles/Landing.css"

class Landing extends React.Component {

    async componentDidMount() {

        //get our user
        await API.getUser()

        // get all posts
        // await API.getAllPosts()

        // get all users
        // await API.getAllUsers()

        // check auth status
        await API.checkAuth()

    }
    render() {
        // console.log("LANDING PROPS ", this.props)

        return (
            <>
                {!this.props.auth.isAuth && <div>
                <h3 className="landingStatement">Bulletin board and directory inside!</h3>
                <div className="iconTitleDiv" >
                    <div className="icon" onClick={this.props.openLogInModal}>💻</div>
                    <div className="title" onClick={this.props.openLogInModal}>Capstone 2023</div>
                </div>
                {!this.props.auth.openModal && <div className="delAcctMessageDiv"><h3>{this.props.auth.authMessage}</h3></div>}
                </div>}

            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openLogInModal: () => dispatch(actions.openUserModal()),
        toggleLogin: () => dispatch(actions.toggleLogin())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)