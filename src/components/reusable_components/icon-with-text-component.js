import ParagraphComponent from "../typography_components/paragraph_component";




const IconWithTextSmallComponent = (props) => {
    return (
        <div class="icon--with--text--small--component">

            <i src="https://www.flaticon.com/free-animated-icon/mortarboard_6454106?related_id=6454106"class="icon-basic-heart"></i>

            <ParagraphComponent ptext= {props.ptext}/>

        </div>
    )
}

export default IconWithTextSmallComponent;