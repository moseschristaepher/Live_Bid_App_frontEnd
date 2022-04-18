


const HeadingQuarternaryComponent = (props) => {
    return (
        <div class="heading--quarternary--component">
            <h4 className={`heading--quarternary ${props.uMarginBottomVerySmall}`}>
                {props.children}
                {props.text}
                {props.h4text}
            </h4>
        </div>
    )
}

export default HeadingQuarternaryComponent;