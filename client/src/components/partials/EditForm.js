import Form from "../Form"
import TextInput from "../TextInput"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"
import { connect } from "react-redux"
import "../../styles/EditForm.css"

const EditForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        await API.editPost({ title: props.app.editPostTitle, body: props.app.editPostBody, _id: props.app.editId })
        // props.closeEditModal()
    }
    return (
        <div className="edit-post-modal">
            <div className="close-btn-div">
                <button className="closeModalBtn" onClick={props.closeEditModal}>X</button>
            </div>
            <Form handleSubmit={handleSubmit} btnTxt="CHANGE" className="edit-post-form">
                <TextInput name="editPostTitle" className="edit-post-input" handleChange={props.handleChange} required={false} state={props.app} />
                <TextInput name="editPostBody" className="edit-post-input" handleChange={props.handleChange} required={false} state={props.app} />
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("EDIT FORM STATE ", state)
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeEditModal: () => dispatch(actions.closeEditModal()),
        handleChange: (input) => dispatch(actions.handleAppChange(input))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)