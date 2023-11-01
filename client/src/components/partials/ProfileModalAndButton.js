import { connect } from "react-redux"
import { Link, Outlet, useLocation } from "react-router-dom"
import actions from "../../utils/redux/actions"
import UpdateProfileModal from "./UpdateProfileModal"

//if use button as link
// import { Link } from "react-router-dom"

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
        
        // {/* // to have button styled as a link use below option */}
        // <>
        // {!props.auth.openModal ? <Link onClick={handleClick}><h3 className="navlink">PROFILE</h3></Link> : <UpdateProfileModal />}
        // </>
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
