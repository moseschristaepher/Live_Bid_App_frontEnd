import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { userLogin } from '../actions';
import ButtonComponent from '../components/reusable_components/button-component';
import HeadingTertiaryComponent from '../components/typography_components/heading_tertiary_component';

import { connect } from 'react-redux';


const LoginForm = (props) => {

    const onSubmit = async (formValues) => {
        await props.userLogin(formValues);
        console.log(formValues)


    };


    return (
        <div class="container">

            <section class="section--login">
                <div class="login--container">

                    <HeadingTertiaryComponent  h3text= {props.isUserLogined.error} />


                    <div class="login--container--box--1 u-margin-bottom-small u-center-text">

                        <HeadingTertiaryComponent  h3text= "Login Form"/>

                    </div>

                    <div class="login--container--box--2">

                        <form  onSubmit={props.handleSubmit(onSubmit)}>

                            <div class="login--form--component">

                                <div class="login--form--component--box--1">

                                    <div class="form__groups">
                                        
                                        <Field name="name" component={renderInput} label="Enter the Name: " />

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

                                        <ButtonComponent>Login</ButtonComponent>

                                    {/* </Link> */}

                                </div>

                            </div>

                        </form>

                    </div>

                </div>
            </section>

        </div>

    )


};

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

const renderError = ({error, touched}) => {
    if(touched && error){
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        );
    }
}



const validate = (formValues) => {
    const errors = {};
    if(!formValues.name){
        errors.name = 'You must enter a name';
    }
    if(!formValues.userNameOrEmail){
        errors.userNameOrEmail = 'You must enter a user name';
    }
    if(!formValues.password){
        errors.password = 'Password is required';
    }

    return errors;
};



const mapStateToProps = (state) => {
    return {

        isUserLogined: state.isUserLogined

    };
};

const LoginFormWrappedComponent =  reduxForm({
    form: 'LoginForm',
    validate
}) (LoginForm);

export default connect( mapStateToProps, { userLogin } )(LoginFormWrappedComponent)
