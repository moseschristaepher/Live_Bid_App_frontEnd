import HeadingQuarternaryComponent from "../typography_components/heading_quarternary_component";
import AvatarWithTextComponent from "./avatar-with-text-component";
import IconWithTextMediumComponent from "./icon-with-text-medium-component";
import ImageSmallComponent from "./img_small_component";




const OtherBidComponent = (props) => {
    return (
        <div class="other--bid--component">

            <div class="other--bid--component--composition">

                <div class="other--bid--component--composition--box--1">

                    <ImageSmallComponent url= {props.url}/>

                </div>

            </div>

            <div class="other--bid--component--content">

                <div class="other--bid--component--content--box--1">

                    <AvatarWithTextComponent h4text= {props.avatarh4text} ptext= {props.avatarptext} url= "https://designing-world.com/funto-v1.0.2/img/bg-img/u1.jpg"/>
                    
                </div>

                <div class="other--bid--component--content--box--2">

                    <div class="popular--item--component--content--box--2--A">

                        <HeadingQuarternaryComponent h4text= {props.h4text}/>

                    </div>

                    <div class="popular--item--component--content--box--2--B">

                        <IconWithTextMediumComponent h4text= {props.placeBidh4text}  fireIconUrl= {props.fireIconUrl}/>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OtherBidComponent;

