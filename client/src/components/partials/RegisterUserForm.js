import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import Form from "../Form"
import TextInput from "../TextInput"
import RegistrationBtn from "./RegistrationBtn"
import LogInUserModal from "./LogInUserModal"
import API from "../../utils/api"
import "../../styles/RegisterUserForm.css"

const RegisterUserForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let { userName, firstName, lastName, email, telephone, hired, department, password1, password2 } = props.auth
        API.registerUser({ userName, firstName, lastName, email, telephone, hired, department, password1, password2 })
    }
    return (
        <div>
            {!props.auth.login ? <div className="registerUser-modal">

                <div className="close-btn-div">
                    <button className="regCloseModalBtn" onClick={() => { props.toggleLogin(), props.closeRegisterUserModal() }}>X</button>
                </div>

                < Form btnTxt="REGISTER" handleSubmit={handleSubmit} className="registerUser-form" >
                    <TextInput labelText="User Name" name="userName" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="First Name" name="firstName" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Last Name" name="lastName" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Email" name="email" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Telephone" name="telephone" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Department" name="department" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Year Hired" name="hired" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Password" name="password1" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                    <TextInput labelText="Confirm Password" name="password2" className="registerUser-input" handleChange={props.handleChange} required={true} state={props.auth} />
                </Form >

                <div className="messageDiv">{props.auth.authMessage}</div>

                <RegistrationBtn />

            </div> : <LogInUserModal />}
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
        closeRegisterUserModal: () => dispatch(actions.closeUserModal()),
        handleChange: (input) => dispatch(actions.handleAuthChange(input)),
        toggleLogin: () => dispatch(actions.toggleLogin())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserForm)