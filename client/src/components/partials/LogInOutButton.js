import { connect } from "react-redux"
import Button from "../Button"
import API from "../../utils/api"
import actions from "../../utils/redux/actions"
import LogInUserModal from "./LogInUserModal"

const LogInOutButton = (props) => {
    const handleClick = async (e) => {
        e.preventDefault()
        props.toggleLogin()
        await API.logoutUser()

    }
    return(
        <div className="logInDiv">

        {props.auth.isAuth ? <Button btnTxt= "Logout" btnClass="logoutBtn" handleClick={handleClick} /> : 
        
        <Button btnTxt= "Login" btnClass="loginBtn" handleClick={props.openLogInModal }/>}

        {!props.auth.isAuth && props.auth.openModal && <LogInUserModal />}

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
        
}

const mapDispatchToProps = (dispatch) => {
    return {
        openLogInModal: () => dispatch(actions.openUserModal()),
        toggleLogin: () => dispatch(actions.toggleLogin())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInOutButton)