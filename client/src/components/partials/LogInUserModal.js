import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import Form from "../Form"
import TextInput from "../TextInput"
import API from "../../utils/api"
import RegistrationBtn from "./RegistrationBtn"
import RegisterUserForm from "./RegisterUserForm"
import "../../styles/LogInUserModal.css"

const LogInUserModal = (props) => {
    // console.log("LOGIN PROPS ", props)
    const handleSubmit = (e) => {
        e.preventDefault()
        let { userName, password } = props.auth
        API.login({ userName, password })
    }
    return (

        <div>
            {props.auth.login ?
                <div className="logIn-modal">
                    <div className="close-btn-div">
                        <button className="closeModalBtn" onClick={props.closeLogInUserModal}>X</button>
                    </div>

                    <Form btnTxt="LOGIN" handleSubmit={handleSubmit} className="logIn-form">
                        {/* <TextInput labelText="Email" name="email" className="logIn-input" handleChange={props.handleChange} required={true} state={props.auth} /> */}
                        <TextInput labelText="User Name" name="userName" className="logIn-input" handleChange={props.handleChange} required={true} state={props.auth} />
                        <TextInput labelText="Password" name="password" className="logIn-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    </Form>



                    <div className="messageDiv">{props.auth.authMessage}</div>

                    <RegistrationBtn />

                </div> : <RegisterUserForm />}
        </div>



    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeLogInUserModal: () => dispatch(actions.closeUserModal()),
        handleChange: (input) => dispatch(actions.handleAuthChange(input)),
        toggleLogin: () => dispatch(actions.toggleLogin())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInUserModal)
