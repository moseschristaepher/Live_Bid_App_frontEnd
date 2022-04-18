import HeadingQuarternaryComponent from "../typography_components/heading_quarternary_component";
import ImageSmallComponent from "./img_small_component";




const IconWithTextMediumComponent = (props) => {
    return (
        <div class="icon--with--text--medium--component">

            <ImageSmallComponent url= {props.fireIconUrl}/>

            <HeadingQuarternaryComponent h4text= {props.h4text}/>

        </div>
    )
}

export default IconWithTextMediumComponent;