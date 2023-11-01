
const Button = (props) =>{
    return (
        <button type="button" className={"btn " + props.btnClass } onClick={ props.handleClick }>
            { props.btnTxt }
        </button>
    )
}


export default Button