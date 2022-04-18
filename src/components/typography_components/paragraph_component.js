


const ParagraphComponent = (props) => {
    return (
        <div class="paragraph--component">
            <p class="paragraph">
                {props.children}

                {props.text}
                {props.ptext}


            </p>
        </div>
    )
}

export default ParagraphComponent;