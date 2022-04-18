import IconWithTextMediumComponent from "./icon-with-text-medium-component";




const BidBadgeComponent = (props) => {
    return (
        <div class="bid--badge--component">

            <IconWithTextMediumComponent fireIconUrl= {props.fireIconUrl} h4text= {props.h4text}/>

        </div>
    )
}

export default BidBadgeComponent;