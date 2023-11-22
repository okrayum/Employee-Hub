import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import UpdateProfileModal from "./UpdateProfileModal"

const ProfileModalAndButton = (props) => {
    const handleClick = async (e) => {
        e.preventDefault()
        await props.prepareToUpdateUser(props.app.user)
        await props.openModal()
        await props.closeModal()
    }
    return(
        <>
        {!props.auth.openModal ? <button className="profileBtn" onClick={handleClick}>Profile</button> : <UpdateProfileModal />}
        </>
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
        openModal: () => dispatch(actions.openUserModal()),
        prepareToUpdateUser: (user) => dispatch(actions.prepareToUpdateUser(user)),
        closeModal: () => dispatch(actions.closeAddModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModalAndButton)
