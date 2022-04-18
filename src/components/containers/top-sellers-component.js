import TopSellerComponent from "../reusable_components/top-seller-component";




const TopSellersComponent = (props) => {
    return (
        <div class="top--sellers-component">
            <div class="top--sellers-component--box--1">

            </div>

            <div class="top--sellers-component--box--2">
                <TopSellerComponent />
            </div>
        </div>
    )
}

export default TopSellersComponent;