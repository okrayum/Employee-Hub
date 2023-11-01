import React from "react"
import { connect } from "react-redux"
import Button from "../Button"
import API from "../../utils/api"
import actions from "../../utils/redux/actions"
import DisplayPosts from "../partials/DisplayPosts"
import AddAPost from "../partials/AddAPost"
import "../../styles/Posts.css"
import { useLocation } from "react-router-dom"



class Posts extends React.Component {
    async componentDidMount() {
        //get our user
        await API.getUser()

        // check auth status
        await API.checkAuth()

        // get all posts
        await API.getAllPosts()

        // get all users
        // await API.getAllUsers()

    }
    render() {
        console.log("DISPLAY POSTS PROPS",this.props)

        return (
            <>
                <div className="header">
                    <h1 >Bulletin Board</h1>
                    {/* <p>(you have {this.props.app.user.posts.length} post)</p> */}
                </div>
                <div className="post-app-wrapper">
                    <div className="everythingDiv">
                        {this.props.app.openAddModal ? <AddAPost /> : 
                        <Button btnTxt={"ADD A POST"} btnClass="addAPost" handleClick={()=>{this.props.openAddTodoModal(), this.props.closeUserModal()}} />}
                        <DisplayPosts />
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
        openAddTodoModal: () => dispatch(actions.openAddModal()),
        closeUserModal: ()=> dispatch(actions.closeUserModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)