import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"
import "../../styles/DeleteUserConfirmModal.css"


const DeleteUserConfirmModal = (props) => {
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     API.deleteUser()
    //     props.closeUpdateUserModal()
    // }
    return (
        // props.openDeleteConfirmModal &&
        <div className="delete-user-modal">
            <div className="delete-user-div">
                <button className="delete-user-closeModalBtn" onClick={props.closeDeleteUserModal}>CANCEL</button>
            </div>
            <h3>Warning! This will delete your account and all content!</h3>
            
            <div className="delUserMessageDiv">{props.auth.authMessage}</div>


            <button className="delete-user-confirm" onClick={()=>{
                API.deleteUser() 
                props.toggleLogin()
                props.toggleModal()
                }}>CONFIRM DELETE</button>

        </div>

    )

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDeleteUserModal: () => dispatch(actions.closeDeleteConfirmModal()),
        toggleLogin: ()=> dispatch(actions.toggleLogin()),
        toggleModal: ()=> dispatch(actions.toggleModal())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserConfirmModal)