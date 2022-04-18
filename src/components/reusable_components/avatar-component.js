import ImageSmallComponent from "./img_small_component";




const AvatarComponent = (props) => {
    return (
        <div class="avatar--component">

            <ImageSmallComponent url= {props.url}/>

        </div>
    )
}

export default AvatarComponent;