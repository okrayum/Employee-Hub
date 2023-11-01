const TextInput = (props) => {

    return(
        <div className={props.className}>
        <label htmlFor={props.name}>{props.labelText}</label>
        <input type="text" name={props.name} id={props.name} value={props.state[props.name]} onChange={(e)=>props.handleChange(e.target)} required={props.required} />
        </div>
    )
}

export default TextInput