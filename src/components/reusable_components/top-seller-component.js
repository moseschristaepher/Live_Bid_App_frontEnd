import AvatarWithTextComponent from "./avatar-with-text-component";
import IconWithTextMediumComponent from "./icon-with-text-medium-component";





const TopSellerComponent = (props) => {
    return (
        <div class="top--seller--component">

            <div class="top--seller--component--composition">

                <div class="top--seller--component--composition--box--1">

                </div>

            </div>

            <div class="top--seller--component--content">

                <div class="top--seller--component--content--box--1">

                    <AvatarWithTextComponent />

                </div>

                <div class="top--seller--component--content--box--2">

                    <IconWithTextMediumComponent />

                </div>

            </div>

        </div>
    )
}

export default TopSellerComponent;