import AvatarWithTextComponent from "./avatar-with-text-component";
import ButtonSmallComponent from "./button-small-component";
import IconWithTextSmallComponent from "./icon-with-text-component";




const DiscoverItemComponent = (props) => {
    return (
        <div class="discover--item--component">

            <div class="discover--item--component--box--1">


            </div>

            <div class="discover--item--component--box--2">

                <IconWithTextSmallComponent />

            </div>

            <div class="discover--item--component--box--3">

                <AvatarWithTextComponent />

            </div>

            <div class="discover--item--component--box--4">

                <ButtonSmallComponent />

            </div>

        </div>
    )
}

export default DiscoverItemComponent;