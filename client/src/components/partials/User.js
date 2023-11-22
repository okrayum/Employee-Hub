import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import AdminDeleteUserConfirmModal from "./AdminDeleteUserConfirmModal"
import formatTelephone from "../../functions/formatTele"
import "../../styles/User.css"




const User = (props) => {

    return (
        <div className="userWrapper">
            {!props.auth.openDeleteConfirmModal && props.auth.deleteUserId !== props.user._id ? <div className="userDiv">

                <h3 className="departmentDiv">{props.user.department}</h3>

                <div className="nameAndDeptDiv">

                    <div className="nameAndHiredDiv">
                        <h3 className="name">{props.user.firstName} {props.user.lastName}</h3>
                        <h4>Team Member Since: {props.user.hired}</h4>
                    </div>

                    <div className="teleAndEmailDiv">
                        <h4 className="telephone">Telephone: {formatTelephone(props.user.telephone)}</h4> <h4 className="email">Email: {props.user.email}</h4>
                    </div>

                </div>

                {props.app.user.role === "admin" && props.user.userName !== "admin" && <button onClick={() => props.openDeleteUserModal(props.user._id)} className="delUserBtn">DELETE USER</button>}
            </div>
                : props.app.user.role === "admin" && <AdminDeleteUserConfirmModal user={props.user} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openDeleteUserModal: (id) => dispatch(actions.openDeleteConfirmModal(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
