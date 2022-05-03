

import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import ButtonComponent from '../components/reusable_components/button-component';
import HeadingTertiaryComponent from '../components/typography_components/heading_tertiary_component';

import { connect } from 'react-redux';
import { fetchCurrentUser, updateCurrentUser } from '../actions';


const UserInfoForm = (props) => {

    useEffect(() => {

        props.fetchCurrentUser({}, props.currentUserProfileUserIdData.userId);

    }, [props.currentUserProfileUserIdData, props.match]);

    console.log(props.currentUserProfileUserIdData)



    const onSubmit = async (formValues) => {
        await props.updateCurrentUser(formValues, props.currentUserProfileUserIdData.userId);

        // document.location.href = '/'

    };

    if (!props.currentUserProfileData) {
        return (
        <div>
            <h1>
                Loading.....
            </h1>
        </div>
        )
    }

    console.log(props?.currentUserProfileData?.errot)

    console.log(props.errorsFromServerData.serverError)

    return (
        <div class="container">

            <section class="section--login">
                <div class="login--container">

                    <HeadingTertiaryComponent  h3text= {props?.currentUserProfileData?.error} />


                    <div class="login--container--box--1 u-margin-bottom-small u-center-text">

                        <HeadingTertiaryComponent  h3text= "Your Profile"/>

                    </div>

                    <div class="login--container--box--2">

                        <form  onSubmit={props.handleSubmit(onSubmit)}>

                            <div class="login--form--component">

                                <div class="login--form--component--box--1">

                                    <div class="form__groups">
                                        
                                        <Field name="userFirstName" component={renderInput} label="Enter the Name: " />

                                    </div>

                                </div>

                                <div class="login--form--component--box--2">

                                    <div class="form__groups">
                                        
                                        <Field name="userNameOrEmail" component={renderInput} label="Enter the userName: " />

                                    </div>

                                </div>

                                <div class="login--form--component--box--3">

                                    <div class="form__groups">
                                        
                                        <Field name="password" component={renderInput} label="Enter password: " />

                                    </div>

                                </div>

                                <div class="login--form--component--box--4">

                                    {/* <Link to="/"> */}

                                        <ButtonComponent>Update Now</ButtonComponent>

                                    {/* </Link> */}

                                </div>

                            </div>

                        </form>

                    </div>

                </div>
            </section>

        </div>
    )


}


const renderError = ({error, touched}) => {
    if(touched && error){
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        );
    }
}

const renderInput = (formProps) =>{
    const { input, label, meta } = formProps;
    return (
        <div className= "form__group">
            <label  class="form__label u-text-size-small">{label}</label>
            <input {...input} autoComplete="off" class= "form__input"/>
            <div>{renderError(meta)}</div>
        </div>
    );
}


const validate = (formValues) => {
    const errors = {};
    if(!formValues.userFirstName){
        errors.userFirstName = 'You must enter a Name';
    } else if (formValues.userFirstName.length < 2) {
        errors.userFirstName = 'Name need to be 2 characters or more';
    }

    if(!formValues.userNameOrEmail){
        errors.userNameOrEmail = 'You must enter a User Name';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.userNameOrEmail)) {
        errors.userNameOrEmail = 'Please enter a valid email';
    }

    if(!formValues.password){
        errors.password = 'You must enter a password';
    } else if (formValues.password.length < 5) {
        errors.password = 'Password need to be 5 characters or more';
    }

    return errors;
};


const mapStateToProps = (state) => {
    return {

        currentUserProfileData: state.currentUserProfile,

        currentUserProfileUserIdData: state.currentUserProfile,

        errorsFromServerData: state.errorsFromServer,

        initialValues: {
            "userFirstName": state.currentUserProfile.payload?.currentUser?.userFirstName,
            "userNameOrEmail": state.currentUserProfile.payload?.currentUser?.userNameOrEmail
        }


    };
};


const UserInfoFormWrappedComponent = reduxForm({
    form: 'userInfoForm',
    validate,
    // initialValues: {

    // },
    enableReinitialize: true
})(UserInfoForm)


export default connect(mapStateToProps, { fetchCurrentUser, updateCurrentUser }) (UserInfoFormWrappedComponent)
