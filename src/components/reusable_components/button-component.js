



const ButtonComponent = (props) => {
    return (
        <div class="button--component">

            <button href="#" onClick= {props.clicked} class="button--component">{props.children}</button>

        </div>
    )
}

export default ButtonComponent;