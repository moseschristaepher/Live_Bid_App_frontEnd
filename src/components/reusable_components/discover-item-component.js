import AvatarWithTextComponent from "./avatar-with-text-component";
import BidBadgeComponent from "./bid-badge-component";
import ButtonSmallComponent from "./button-small-component";
import IconWithTextSmallComponent from "./icon-with-text-component";
import ImageMediumComponent from "./image-medium-component";




const DiscoverItemComponent = (props) => {
    return (
        <div class="discover--item--component">

            <div class="discover--item--component--box--1 u-margin-bottom-very-small">

                <ImageMediumComponent url= {props.url}/>

                <div class="discover--item--component--box--1--A">

                    <BidBadgeComponent fireIconUrl= "https://designing-world.com/funto-v1.0.2/img/core-img/fire.png" h4text= "New Bid"/>

                </div>

            </div>

            <div class="discover--item--component--box--2 u-margin-bottom-very-small">

                <IconWithTextSmallComponent ptext= {props.ptext}/>

            </div>

            <div class="discover--item--component--box--3 u-margin-bottom-very-small">

                <AvatarWithTextComponent h4text= {props.avatarh4text} ptext= {props.avatarptext} url= {props.avatarUrl}/>

            </div>

            <div class="discover--item--component--box--4">

                <ButtonSmallComponent>Place Bid</ButtonSmallComponent>

                <IconWithTextSmallComponent ptext= {props.activityptext}/>


            </div>

        </div>
    )
}

export default DiscoverItemComponent;