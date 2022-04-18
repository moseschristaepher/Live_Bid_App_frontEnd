import HeadingTertiaryComponent from "../typography_components/heading_tertiary_component";
import ParagraphComponent from "../typography_components/paragraph_component";
import ImageMediumComponent from "./image-medium-component";




const FeatureBoxComponent = (props) => {
    return (
        <div class="feature-box--component">

            <div class="feature-box--component--box--1 u-margin-bottom-very-small">
                <ImageMediumComponent url={props.url}/>
            </div>

            <div class="feature-box--component--box--2 u-margin-bottom-very-small">

                <HeadingTertiaryComponent>Create your account & add wallet</HeadingTertiaryComponent>

            </div>

            <div class="feature-box--component--box--3 ">

                <ParagraphComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ParagraphComponent>

            </div>

        </div>
    )
}

export default FeatureBoxComponent;