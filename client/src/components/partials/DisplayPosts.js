import { connect } from "react-redux"
import Post from "./Post"
import EditForm from "./EditForm"
import "../../styles/DisplayPosts.css"


const DisplayPosts = (props) => {
    // console.log("display posts PPRROOPPSS", props.app.allPosts)
    return (

        <div className="allPostsDiv">
            <ul>
                {
                    props.app.allPosts && props.app.allPosts.map(post => props.app.isEdit && props.app.editId === post._id ? <li key={props.app.editId}><EditForm /></li> : <li key={post._id}><Post post={post} /></li>
                    )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("STATE DISPLAYPOSTS ", state)
    return {
        app: state.app
    }
}

export default connect(mapStateToProps, null)(DisplayPosts)