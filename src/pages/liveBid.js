import BidcardsComponent from "../components/containers/bid-cards-component";
import DiscoverItemsComponent from "../components/containers/discover-items-component";
import FeaturesBoxesComponent from "../components/containers/feature-boxes-component";
// import OtherBidsComponent from "../components/containers/other-bids-component";
import PopularItemsComponent from "../components/containers/popular-items-container";
import ButtonComponent from "../components/reusable_components/button-component";
// import TopBuyersComponent from "../components/containers/top-buyer-component";
// import TopSellersComponent from "../components/containers/top-sellers-component";
import HeadingTertiaryComponent from "../components/typography_components/heading_tertiary_component";





const BidPage = (props) => {
    return (
        <div class="container">
            <section class="section--liveBid">
                <div class="livebid--container">

                    <div class="livebid--container--box--1 u-margin-bottom-small">

                        <HeadingTertiaryComponent  h3text= "Live Bid"/>

                    </div>

                    <div class="livebid--container--box--2">

                        <BidcardsComponent />

                    </div>

                </div>
            </section>

            <section class="section--features">
                <div class="features--container">

                    <FeaturesBoxesComponent />

                </div>
            </section>

            <section class="section--popularItem">
                <div class="popularItem--container">

                    <div class="popularItem--container--box--1 u-margin-bottom-small u-center-text">

                        <HeadingTertiaryComponent  h3text= "Popular items in last in 1 days"/>

                    </div>

                    <div class="popularItem--container--box--2">

                        <PopularItemsComponent />

                    </div>
                    
                </div>
            </section>

            <section class="section--discoverItem">
                <div class="discoverItem--container">

                    <div class="discoverItem--container--box--1 u-margin-bottom-medium">

                        <HeadingTertiaryComponent  h3text= "Discover Items"/>

                    </div>

                    <div class="discoverItem--container--box--2">

                        
                    </div>

                    <div class="discoverItem--container--box--3">

                        <DiscoverItemsComponent />

                    </div>
                    
                </div>
            </section>

            {/* <section class="section--otherbid">
                <div class="otherbid--container">

                    <div class="otherbid--container--box-1">

                        <OtherBidsComponent />
                    </div>

                    <div class="otherbid--container--box-2">

                        <TopSellersComponent />
                        
                    </div>

                    <div class="otherbid--container--box-3">

                        <TopBuyersComponent />
                        
                    </div>
                    
                </div>
            </section> */}

            <section class="section--get--started">
                <div class="get--started--container">

                    <div class="get--started--container--box--1">

                        <HeadingTertiaryComponent h3text= "Resources for getting started with Funto."/>

                    </div>

                    <div class="get--started--container--box--2">
                        
                        <ButtonComponent>Get started</ButtonComponent>

                    </div>
                    
                </div>
            </section>

            {/* <section class="section--stay--connected">
                <div class="stay--connected--container">

                    <div class="stay--connected--container--content">

                        <div class="stay--connected--container--content--box--1">

                        </div>

                        <div class="stay--connected--container--content--box--2">

                        </div>

                    </div>

                    <div class="stay--connected--container--composition">
                        
                    </div>
                    
                </div>
            </section> */}

        </div>
    )
}

export default BidPage;