import OtherBidComponent from "../reusable_components/other-bid-component";




const OtherBidsComponent = (props) => {
    return (
        <div class="other--bids-component">
            <div class="other--bids-component--box--1">

            </div>

            <div class="other--bids-component--box--2">
                <OtherBidComponent url= "https://designing-world.com/funto-v1.0.2/img/bg-img/6.jpg" avatarh4text= "Pixel Cartoon" avatarptext= "@designing_world" fireIconUrl= "https://designing-world.com/funto-v1.0.2/img/core-img/fire.png" placeBidh4text= "Place Bid" h4text= "0.99 ETH"/>
            </div>
        </div>
    )
}

export default OtherBidsComponent;