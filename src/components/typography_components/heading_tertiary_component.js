


const HeadingTertiaryComponent = (props) => {
    return (
        <div class="heading--tertiary--component">
            <h3 class="heading--tertiary">
                {props.children}
                {props.text}
                {props.h3text}
            </h3>
        </div>
    )
}

export default HeadingTertiaryComponent;