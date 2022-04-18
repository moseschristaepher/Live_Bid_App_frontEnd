import HeadingQuarternaryComponent from "../typography_components/heading_quarternary_component";
import ParagraphComponent from "../typography_components/paragraph_component";
import AvatarComponent from "./avatar-component";




const AvatarWithTextComponent = (props) => {
    return (
        <div class="avatar--with--text--component">

            <div class="avatar--with--text--component--box--1">

                <AvatarComponent url= {props.url}/>

            </div>

            <div class="avatar--with--text--component--box--2">

                <HeadingQuarternaryComponent h4text={props.h4text}></HeadingQuarternaryComponent>

                <ParagraphComponent ptext={props.ptext}></ParagraphComponent>
                
            </div>
        </div>
    )
}

export default AvatarWithTextComponent;