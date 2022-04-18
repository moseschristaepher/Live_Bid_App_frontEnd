import BidcardComponent from "../reusable_components/bid-card-component";



const BidcardsComponent = (props) => {
    return (
        <div class="bid-cards-component">

            <BidcardComponent url= "https://designing-world.com/funto-v1.0.2/img/bg-img/9.jpg" avatarUrl= "https://designing-world.com/funto-v1.0.2/img/bg-img/u4.jpg" avatarh4text= "Fancy Car" avatarptext= "@fancy_car" ptext= "3 stock available"/>

            <BidcardComponent url= "https://designing-world.com/funto-v1.0.2/img/bg-img/10.jpg" avatarUrl= "https://designing-world.com/funto-v1.0.2/img/bg-img/u1.jpg" avatarh4text= "Animal Playing with Guiter" avatarptext= "@creative_world" ptext= "11 stock available"/>

            <BidcardComponent url= "https://designing-world.com/funto-v1.0.2/img/bg-img/11.jpg" avatarUrl= "https://designing-world.com/funto-v1.0.2/img/bg-img/u2.jpg" avatarh4text= "Halloween #471" avatarptext= "@fancy_car" ptext= "Not available"/>

            <BidcardComponent url= "https://designing-world.com/funto-v1.0.2/img/bg-img/12.jpg" avatarUrl= "https://designing-world.com/funto-v1.0.2/img/bg-img/u3.jpg" avatarh4text= "Vigor Dance" avatarptext= "@fancy_nft" ptext= "29 stock available"/>

        </div>
    )
}

export default BidcardsComponent;