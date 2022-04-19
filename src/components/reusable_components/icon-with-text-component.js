import ParagraphComponent from "../typography_components/paragraph_component";




const IconWithTextSmallComponent = (props) => {
    return (
        <div class="icon--with--text--small--component">

            <ParagraphComponent ptext= {props.ptext}/>

        </div>
    )
}

export default IconWithTextSmallComponent;