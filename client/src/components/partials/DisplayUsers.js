import { connect } from "react-redux"
import User from "./User"
import { useEffect } from "react"
import API from "../../utils/api"


const DisplayUsers = (props) => {
    // console.log("display users PPRROOPPSS", props.app.allUsers)
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
    // console.log("STATE DISPLAYPOSTS ", state)
    return {
        app: state.app,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(DisplayUsers)

