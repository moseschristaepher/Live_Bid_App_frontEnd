import HeadingQuarternaryComponent from "../typography_components/heading_quarternary_component";
import AvatarWithTextComponent from "./avatar-with-text-component";
import IconWithTextMediumComponent from "./icon-with-text-medium-component";
import ImageSmallComponent from "./img_small_component";




const PopularItemComponent = (props) => {
    return (
        <div class="popular--item--component">

            <div class="popular--item--component--composition">

                <div class="popular--item--component--composition--box--1">

                    <ImageSmallComponent url= {props.url}/>

                </div>

            </div>

            <div class="popular--item--component--content">

                <div class="popular--item--component--content--box--1">

                    <AvatarWithTextComponent h4text= {props.avatarh4text} ptext= {props.avatarptext} url= "https://designing-world.com/funto-v1.0.2/img/bg-img/u1.jpg"/>

                </div>

                <div class="popular--item--component--content--box--2">

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

export default PopularItemComponent;