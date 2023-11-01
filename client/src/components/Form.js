
const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={props.className}>
            {
                props.children
            }
            <button type="submit">{props.btnTxt}</button>

        </form>
    )
}

export default Form