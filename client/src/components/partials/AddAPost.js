import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import Form from "../Form"
import TextInput from "../TextInput"
import API from "../../utils/api"
import "../../styles/AddAPost.css"

const AddAPost = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        let post = {_id: props.app.user._id, title:props.app.title, body: props.app.body}
        await API.addPost(post)
        await API.getAllPosts() 
        await props.closeAddPostModal()
    }
    return (
        <div className="add-post-modal">
            <div className="add-close-btn-div">
                <button className="closeModalBtn" onClick={props.closeAddPostModal}>X</button>
            </div>
            <Form btnTxt="ADD" handleSubmit={handleSubmit} className="add-post-form">
                <TextInput labelText="Title For Post" name="title" className="add-post-input" handleChange={props.handleChange} state={props.app} required={true} />
                <TextInput labelText="Body For Post" name="body" className="add-post-input" handleChange={props.handleChange} state={props.app} required={true} />
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAddPostModal: () => dispatch(actions.closeAddModal()),
        handleChange: (input) => dispatch(actions.handleAppChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAPost)