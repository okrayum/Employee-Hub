import React from "react"
import { connect } from "react-redux"
import API from "../../utils/api"
import actions from "../../utils/redux/actions"
import DisplayUsers from "../partials/DisplayUsers"
import "../../styles/Directory.css"

class Directory extends React.Component {
    async componentDidMount(){
        //get our user
        await API.getUser()

        // // check auth status
        await API.checkAuth() 

        // // get all users
        await API.getAllUsers()

        // get all posts
        // await API.getAllPosts()

    }
    render() {
        // console.log("DIRECTORY PROPS ", this.props)
        return (
            <>
            <div className="header">
                    <h1 >Directory</h1>
                    {/* <p>(you have {this.props.app.user.posts.length} post)</p> */}
                </div>
            <div className="users-app-wrapper">

                <div className="everythingDiv">
                <DisplayUsers/>
                </div>

            </div>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    


    return {
        app: state.app,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory)