import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonComponent from "../reusable_components/button-component";
import UserProfileInfoComponent from "../reusable_components/user-profile-component";
import HeadingTertiaryComponent from "../typography_components/heading_tertiary_component";




const HeaderComponent = (props) => {
    return (
        <div class="header--component">
            <div class="header-component--box--1 u-margin-right-small">

                <ButtonComponent clicked = {props.clicked}>{props.userLoginData.isUserAuthenticated ? "Logout" : "Login" }</ButtonComponent>

            </div>

            <div class="header--component--box--2 u-margin-right-small">

                <div class="header--component--box--2--content">

                    <HeadingTertiaryComponent h3text= {props.h3text}/>

                </div>

                <div class="header--component--box--2--profile">

                    {props.userLoginData.isUserAuthenticated ? (


                            <NavLink to ={`/auth/myAccount`}>
                                <UserProfileInfoComponent  
                                        ptext= {props.ptext} 
                                        avatarUrl= {props.avatarUrl}
                                />
                            </NavLink>
                        )

                    : null }

                </div>

            </div>

            <div class="header-component--box--3">

                <HeadingTertiaryComponent h3text= {props.totalCount}/>

            </div>
        </div>
    )
}

export default HeaderComponent;