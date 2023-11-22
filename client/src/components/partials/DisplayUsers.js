import { connect } from "react-redux"
import User from "./User"

const DisplayUsers = (props) => {
    return (
        <div className="allUsersDiv">

            <ul>
                {
                    props.app.allUsers && props.app.allUsers.map(user => <li key={user._id} className="userLi"><User user={user} /></li>


                    )}
            </ul>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(DisplayUsers)

