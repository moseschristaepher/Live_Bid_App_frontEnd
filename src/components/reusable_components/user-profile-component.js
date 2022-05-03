import ParagraphComponent from "../typography_components/paragraph_component";
import AvatarComponent from "./avatar-component";




const UserProfileInfoComponent = (props) => {
    return (
        <div class="user--profile--info--component">

            <div class="user--profile--info--component--box--1 u-margin-right-very-small">
                <AvatarComponent url= {props.avatarUrl}/>
            </div>

            <div class="user--profile--info--component--box--2">


                <ParagraphComponent ptext= {props.ptext}/>

            </div>

        </div>
    )
}

export default UserProfileInfoComponent;