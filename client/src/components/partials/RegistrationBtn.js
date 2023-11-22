import { connect } from "react-redux"
import Button from "../Button"
import actions from "../../utils/redux/actions"
// import RegisterUserForm from "./RegisterUserForm"

const LoginRegistrationBtn = (props) => {
    return (

        <>
            <Button
                
                btnTxt={props.auth.login ? "REGISTER" : "LOGIN"}
                handleClick={
                    // props.closeLoginModal
                    props.toggleLogin
                }
                btnClass="login-registration-btn"
            />
            {/* {!props.auth.login && <RegisterUserForm />} */}

        </>

    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogin: () => dispatch(actions.toggleLogin()),
        closeLoginModal: () => dispatch(actions.closeUserModal)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegistrationBtn)
