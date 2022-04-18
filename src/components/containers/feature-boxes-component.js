import FeatureBoxComponent from "../reusable_components/feature-box-component";




const FeaturesBoxesComponent = (props) => {
    return (
        <div class="feature--boxes--component">

            <FeatureBoxComponent url= "https://designing-world.com/funto-v1.0.2/img/illustrator/4.png"/>

            <FeatureBoxComponent url="https://designing-world.com/funto-v1.0.2/img/illustrator/2.png"/>

            <FeatureBoxComponent url= "https://designing-world.com/funto-v1.0.2/img/illustrator/3.png"/>

            <FeatureBoxComponent url= "https://designing-world.com/funto-v1.0.2/img/illustrator/1.png"/>

        </div>
    )
}

export default FeaturesBoxesComponent;