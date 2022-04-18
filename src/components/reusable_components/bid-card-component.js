import AvatarWithTextComponent from "./avatar-with-text-component";
import BidBadgeComponent from "./bid-badge-component";
import BidEndsComponent from "./bid-ends-component";
import ButtonComponent from "./button-component";
import IconSmallComponent from "./icon-small-component";
import IconWithTextSmallComponent from "./icon-with-text-component";
import ImageMediumComponent from "./image-medium-component";





const BidcardComponent = (props) => {
    return (
        <div class="bid--card--component">

            <div class="bid--card--component--box--1 u-margin-bottom-very-small">

                <ImageMediumComponent url= {props.url}/>

                <div class="bid--card--component--box--1--A">

                    <BidEndsComponent />
                </div>

                <div class="bid--card--component--box--1--B">

                    <BidBadgeComponent fireIconUrl= "https://designing-world.com/funto-v1.0.2/img/core-img/fire.png" h4text= "New Bid"/>

                </div>


            </div>

            <div class="bid--card--component--box--2 u-margin-bottom-very-small">

                <IconWithTextSmallComponent ptext= {props.ptext}/>

                <IconSmallComponent />

            </div>

            <div class="bid--card--component--box--3 u-margin-bottom-very-small">

                <AvatarWithTextComponent h4text= {props.avatarh4text} ptext= {props.avatarptext} url= {props.avatarUrl} />

            </div>

            <div class="bid--card--component--box--4">

                <ButtonComponent>Place Bid</ButtonComponent>

            </div>

        </div>
    )
}

export default BidcardComponent;