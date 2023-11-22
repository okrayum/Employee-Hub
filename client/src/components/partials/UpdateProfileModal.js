import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import Form from "../Form"
import TextInput from "../TextInput"
import DeleteUserConfirmModal from "./DeleteUserConfirmModal"
import API from "../../utils/api"
import "../../styles/UpdateProfileModal.css"

const UpdateProfileModal = (props) => {
    console.log("UPDATE PROFILE PROPS ", props.app.user.role)
    const handleSubmit = (e) => {
        e.preventDefault()
        let { userName, firstName, lastName, email, telephone, hired, password1, password2, department, role} = props.auth
        API.updateUserandPosts({ userName, firstName, lastName, email, telephone, hired, password1, password2, department, role })
    }
    return (
        <div className="updateModalContainer">
            {!props.auth.openDeleteConfirmModal ?
             <div className="update-profile-modal">
                <div className="close-btn-div">
                    <button className="closeModalBtn" onClick={props.closeUpdateUserModal}>X</button>
                </div>
                <Form btnTxt="UPDATE" handleSubmit={handleSubmit} className="update-user-profile-form">
                    <TextInput labelText="User Name" name="userName" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="First Name" name="firstName" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="Last Name" name="lastName" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="Email" name="email" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="Telephone" name="telephone" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="Department" name="department" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="Year Hired" name="hired" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    {props.app.user.role === "admin" && <TextInput labelText="Role" name="role" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />}
                    <TextInput labelText="Password" name="password1" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                    <TextInput labelText="Confirm Password" name="password2" className="update-user-input" handleChange={props.handleChange} required={false} state={props.auth} />
                </Form>
                <div className="messageDiv">{props.auth.authMessage}</div>


                {/* <button onClick={()=>{API.deleteUser(), props.toggleLogin()}}>DELETE USER</button> */}

                {props.app.user.role === "user" && <button onClick={props.openDeleteUserModal} className="userDelUserBtn">DELETE ACCOUNT</button>}

            </div> 

             : <DeleteUserConfirmModal />}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeUpdateUserModal: () => dispatch(actions.closeUserModal()),
        handleChange: (input) => dispatch(actions.handleAuthChange(input)),
        toggleLogin: () => dispatch(actions.toggleLogin()),
        openDeleteUserModal: () => dispatch(actions.openDeleteConfirmModal())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileModal)