
const Modal = (props) => {
    return (
        <div className={"modal-wrapper " + props.modalClass} >
            <div className="modal-btn-div">
                <button className="modal-btn" onClick={props.handleClick}>X</button>
            </div>
            <div className={"modal-content-div " + props.modelContentClass} >
                {props.children}
            </div>
        </div>
    )
}

export default Modal