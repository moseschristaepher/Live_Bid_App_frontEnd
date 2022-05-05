
import { Router, Route, Switch } from "react-router-dom";


import BidPage from "../pages/liveBid";
import LoginForm from "../pages/LoginPage";

import UserInfoFormWrappedComponent from '../pages/userProfilePage';

import history from "../reducers/history";

import { connect } from 'react-redux';

import React, { useEffect, Suspense } from 'react';


import "../sass/main.scss";
import { checkUserSignIn, fetchCurrentUser } from "../actions";
import { Redirect } from "react-router-dom";


const App = (props) => {
  useEffect(() => {
    // props.fetchCurrentUser();
    props.checkUserSignIn();
    console.log(props.currentUserProfileData?.isCurrentUserAuthenticated)

    console.log(props.isUserLoginedData)
  }, []);

  useEffect(() => {

    props.checkUserSignIn();

    console.log(props.isUserLoginedData);
    console.log(props.currentUserProfileData);
  }, [props.isUserLoginedData.isUserAuthenticated, props.currentUserProfileData.isCurrentUserAuthenticated]);


  console.log(props.currentUserProfileData?.isCurrentUserAuthenticated)

  console.log(props.isUserLoginedData)


  console.log(props.currentUserProfileData?.isCurrentUserAuthenticated);


  //// ISSUES WITH RE-RENDERING ////////
  
  // const ProtectedRoute = ({
  //   component: Component,
  //   isUserAuthenticated: isUserAuthenticated,
  //   logout: logout,
  //   ...rest
  // }) => {

  //   console.log("calling protected route")
  //   console.log(isUserAuthenticated)

  //   console.log(props.currentUserProfileData?.isCurrentUserAuthenticated)


  //   return (
  //     <Route 
  //       {...rest}
  //       render= {(props) => {
  //         if (isUserAuthenticated) {
  //           return <Component />;
  //           // return console.log("the user is authenticated");
  //         } else {
  //           console.log("redirecting to /auth/userLogin")
  //           // return <Redirect to= "/auth/userLogin" />;
  //           return <Redirect to= {{ pathname: '/auth/userLogin' }} />
  //         }
  //       }}
  //       />
  //   )

  // }
  /////////////////////////////////////

  return (
    <div>
      <Router history={history}>
          <div>
            <Switch>

              <Route path = "/auth/myAccount" component={UserInfoFormWrappedComponent} />

              <Route path = "/auth/userLogin" exact component = {LoginForm} />

              <Route path = "/" exact component = {BidPage} />

            </Switch>
          </div>
      </Router>
      
    </div>
  );
  // }
}


const mapStateToProps = state => {
  return {
    isUserLoginedData: state.isUserLogined,
    currentUserProfileData: state.currentUserProfile
  };
};

// export default App;
export default connect( mapStateToProps, { fetchCurrentUser, checkUserSignIn })(App);
