import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"
import "../../styles/DeleteUserConfirmModal.css"

const AdminDeleteUserConfirmModal = (props) => {
    // console.log("ADMIN DELETE ", props)
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
            <h3>Warning! This will delete user account and all related content!</h3>
            
            {/* <div className="messageDiv">{props.auth.authMessage}</div> */}


            <button className="delete-user-confirm" onClick={()=>{API.adminDeleteUser(props.auth.deleteUserId), props.closeDeleteUserModal()}}>CONFIRM DELETE</button>
            {/* <button onClick={()=>{API.adminDeleteUser(), props.closeDeleteUserModal()}}>CONFIRM DELETE</button> */}

        </div>

    )

}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDeleteUserModal: () => dispatch(actions.closeDeleteConfirmModal()),
        // toggleLogin: ()=> dispatch(actions.toggleLogin())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDeleteUserConfirmModal)