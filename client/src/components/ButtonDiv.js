import API from "../utils/api"
import { connect } from "react-redux"
import { useEffect } from "react"
import actions from "../utils/redux/actions"
import "../styles/ButtonDiv.css"

const ButtonDiv = (props) => {
    // console.log("BTN PROPS", props.post._id)

    // to delete posts that are older than 10 days old
    // let postedDate = props.post.createdAt
    // let age = (Math.abs((new Date(postedDate).getTime()) - (new Date().getTime()))) / 1000 / 60 / 60 / 24
    // console.log(age)
    // let daysAgo = Math.trunc(age)
    // // let daysAgo = age.toFixed()
    // console.log("ago ", daysAgo)
    // daysAgo > 10 && API.deletePost(props.post._id)


    useEffect(() => {
        // to auto delete posts that are older than 10 days old
        let postedDate = props.post.createdAt
        let age = (Math.abs((new Date(postedDate).getTime()) - (new Date().getTime()))) / 1000 / 60 / 60 / 24
        // console.log(age)
        let daysAgo = Math.trunc(age)
        // let daysAgo = age.toFixed()
        // console.log("ago ", daysAgo)
        daysAgo > 10 && API.deletePost(props.post._id)
    })

    return (
        <>
            {props.app.user.role === "user" ?
                props.app.user._id === props.post.userId._id && <div className="edDelButtonDiv">
                    <button className="delBtn" onClick={() => API.deletePost(props.post._id)}>Delete</button>
                    <button className="editBtn" onClick={() => props.startEdit(props.post)}>Edit</button>
                </div> :
                props.app.user.role === "admin" && <div className="edDelButtonDiv">
                    <button className="delBtn" onClick={() => API.deletePost(props.post._id)}>Delete</button>
                    <button className="editBtn" onClick={() => props.startEdit(props.post)}>Edit</button>
                </div>}
        </>
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
        startEdit: (_id) => dispatch(actions.startEditPost(_id)),
        // openEditModal: ()=>dispatch(actions.openAddModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDiv)